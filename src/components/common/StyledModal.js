import { Modal as ModalAntd } from "antd";
import styled from "styled-components";

export const Modal = styled(ModalAntd)`
  .ant-modal-content .close-modal {
    background: #4476ffd3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 3px solid #4476ffd3;
    cursor: pointer;
    z-index: 999999999;

    position: absolute;
    right: 0;
    top: 0;
    margin: -1.5em;
  }

  .ant-modal-content .close-modal img {
    filter: invert(1);
  }

  .ant-modal-content .close-modal:hover {
    transition: all 0.5s 0s;
  }

  .ant-modal-content .close-modal svg {
    color: #fff;
    font-size: 2em;
  }
`;
