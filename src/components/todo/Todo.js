import { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "hooks";
import styled from "styled-components";

import Button from "antd/lib/button";
import message from "antd/lib/message";
import Typography from "antd/lib/typography";
import Skeleton from "antd/lib/skeleton";
import Checkbox from "antd/lib/checkbox";
import Result from "antd/lib/result";

import { useHistory } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchBackend, uuidv4 } from "helpers";

import { Input } from "components";
import { WrapperLogin, LoginBox, BlurredBox } from "components/login";
import { YupEditor, editorSchema, users } from "constant";
import { useGlobalContext } from "context/GlobalContext";

import PlusOutlined from "@ant-design/icons/PlusOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";

const WrapperContentTodo = styled(Col)`
  border-radius: 8px;
  padding: 0 1.2em !important;
`;

const WrapperEditor = styled(Row)`
  border-radius: 8px;
  padding-bottom: 1em;

  form {
    display: flex;
    width: 100%;
  }

  form div {
    flex: 1 1 auto;
  }
`;

const WrapperHeader = styled(Row)``;

const WrapperTodoList = styled(Row)``;

const WrapperSingleItemTask = styled(Col)`
  margin: 1em 0;
  background: #ffffff;
  border-radius: 8px;
  padding: 1em 2em;
  border: 1px solid #ddd;

  &:hover {
    box-shadow: 4px 4px 24px -6px #1890ff47;
  }

  div {
    margin: 0 !important;
  }

  .content-task {
    flex: 1 1 auto;
    width: 80%;
    opacity: ${(props) => (props.isCompleted ? 0.5 : 1)};
  }

  .content-task p {
    font-size: 12px;
    font-weight: bold;
    text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};
  }

  .content-task small {
    font-size: 11px;
    color: gray;
  }

  .wrapper-radio {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-radio-wrapper {
    margin: 0px;
  }

  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
  }

  .ant-checkbox-inner::after {
    left: 32%;
  }

  .actions {
    display: flex;
    align-items: center;
  }
`;

export const Todo = () => {
  const [data, setData] = useState([]);
  const { dataSource, loading, error } = useFetch("/list");

  useEffect(() => {
    setData(dataSource || []);
  }, [dataSource]);

  console.log({ dataSource });

  return (
    <WrapperContentTodo md={12}>
      <Editor setData={setData} />
      <Header task={data?.length} />
      <TodoList
        dataSource={data}
        loading={loading}
        error={error}
        setData={setData}
      />
    </WrapperContentTodo>
  );
};

const Editor = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupEditor),
    defaultValues: editorSchema,
  });

  const addedTask = async (form) => {
    const { error } = await fetchBackend({
      url: "/list",
      method: "post",
      data: form,
    });

    if (!error) {
      // todo OK
      setData((s) => s.concat(form));
      message.success("Tarea agregada con exito");
    } else {
      message.error(
        "Hubo un error al intentar agregar la tarea, intentalo nuevamente"
      );
    }
  };

  const onSubmit = ({ title }) => {
    addedTask({
      title,
      date: new Date().toLocaleString(),
      isCompleted: false,
      id: uuidv4(),
    });
  };

  return (
    <WrapperEditor>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            label=""
            name="title"
            classMain="pa0"
            classLabel="pa0"
            control={control}
            error={errors?.title?.message}
            placeholder="¿Cúal es el titulo de esta nueva tarea?"
          />
        </Row>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
        />
      </form>
    </WrapperEditor>
  );
};

const Header = ({ task = 0 }) => {
  return (
    <WrapperHeader>
      <Typography.Title level={4}>Tareas pendientes {task}</Typography.Title>
    </WrapperHeader>
  );
};

const TodoList = ({ dataSource, loading, error, setData }) => {
  if (loading) {
    return <SkeletonTask />;
  }

  if (error) {
    return <ErrorLoadingContent />;
  }

  if (!dataSource || !dataSource.length) {
    return <EmptyContent />;
  }

  const updatedTask = async (singleTask, isCompleted) => {
    const currenTask = { ...singleTask, isCompleted };
    const { error: errorFetch } = await fetchBackend({
      url: `/list/${singleTask.id}`,
      method: "put",
      data: currenTask,
    });

    if (!errorFetch) {
      const cloneDataSource = JSON.parse(JSON.stringify([...dataSource]));

      const tasksIndex = cloneDataSource.findIndex((task) => {
        return task.id === currenTask.id;
      });
      cloneDataSource.splice(tasksIndex, 1, currenTask);
      setData(cloneDataSource);
      message.success("Tarea actualizada con exito");
    } else {
      message.error(
        "Hubo un error al intentar actualizar la tarea, intentalo nuevamente"
      );
    }
  };

  const deletedTask = async (idTask) => {
    const { error: errorFetch } = await fetchBackend({
      url: `/list/${idTask}`,
      method: "delete",
    });

    if (!errorFetch) {
      setData((prevTask) => prevTask.filter((task) => task.id !== idTask));
      message.success("Tarea eliminada con exito");
    } else {
      message.error(
        "Hubo un error al intentar eliminar la tarea, intentalo nuevamente"
      );
    }
  };

  const onRemove = (idTask) => {
    deletedTask(idTask);
  };

  const onUpdateStateTask = (task, isCompleted) => {
    updatedTask(task, isCompleted);
  };

  return (
    <>
      <WrapperTodoList>
        {dataSource.map((task) => {
          const { id, isCompleted, title, date } = task;
          return (
            <SingleItemTask
              id={id}
              key={id}
              date={date}
              title={title}
              isCompleted={isCompleted}
              onCheckbox={(currentStateTask) => {
                onUpdateStateTask(task, currentStateTask);
              }}
              render={(idTask) => {
                return (
                  <DeleteOutlined
                    className="red"
                    onClick={() => onRemove(idTask)}
                  />
                );
              }}
            />
          );
        })}
      </WrapperTodoList>
    </>
  );
};

const SingleItemTask = ({
  id,
  isCompleted,
  title,
  date,
  onCheckbox,
  render,
}) => {
  return (
    <WrapperSingleItemTask md={12} isCompleted={isCompleted}>
      <Row between="xs">
        <div className="wrapper-radio">
          <Checkbox
            checked={isCompleted}
            onChange={(e) => {
              onCheckbox(e.target.checked);
            }}
          />
        </div>
        <div className="content-task">
          <Row start="xs">
            <Col md={12}>
              <p>{title}</p>
            </Col>
            <Col md={12}>
              <small>{date}</small>
            </Col>
          </Row>
        </div>
        <div className="actions">
          <Row>{render(id)}</Row>
        </div>
      </Row>
    </WrapperSingleItemTask>
  );
};

const SkeletonTask = () => {
  return (
    <>
      <Skeleton avatar paragraph={{ rows: 1 }} />
      <Skeleton avatar paragraph={{ rows: 1 }} />
      <Skeleton avatar paragraph={{ rows: 1 }} />
      <Skeleton avatar paragraph={{ rows: 1 }} />
    </>
  );
};

const ErrorLoadingContent = () => {
  return (
    <Result
      status="error"
      title="Ocurrio un error al obtener la información"
      subTitle="Por favor recarga nuevamente la página o intentalo más tarde"
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => window.location.reload()}
        >
          RECARGAR PÁGINA
        </Button>,
      ]}
    />
  );
};

const EmptyContent = () => {
  return (
    <Result
      status="403"
      title="Aún no has agregado tu primer pendiente en la app"
      subTitle="Ingresa cualquier tarea y empieza a mejorar tu día"
    />
  );
};
