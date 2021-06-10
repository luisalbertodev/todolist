import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"); // import font from https://fonts.google.com/

body {
  font-family: Lato, sans-serif;
}

small{
  padding:4px;
  font-size: 12px;
}

.dn{
  display: none;
}

.red{
  color:red;
}

.w-100{
  width:100%;
}

.h-100{
  height:100%;
}

.min-vh-100{
  min-height: 100vh;
}

.pa0 {
  padding: 0 !important;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pa6 {
  padding: 8rem;
}
.pa7 {
  padding: 16rem;
}
.pl0 {
  padding-left: 0;
}
.pl1 {
  padding-left: 0.25rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pl3 {
  padding-left: 1rem;
}
.pl4 {
  padding-left: 2rem;
}
.pl5 {
  padding-left: 4rem;
}
.pl6 {
  padding-left: 8rem;
}
.pl7 {
  padding-left: 16rem;
}
.pr0 {
  padding-right: 0;
}
.pr1 {
  padding-right: 0.25rem;
}
.pr2 {
  padding-right: 0.5rem;
}
.pr3 {
  padding-right: 1rem;
}
.pr4 {
  padding-right: 2rem;
}
.pr5 {
  padding-right: 4rem;
}
.pr6 {
  padding-right: 8rem;
}
.pr7 {
  padding-right: 16rem;
}
.pb0 {
  padding-bottom: 0;
}
.pb1 {
  padding-bottom: 0.25rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.pb3 {
  padding-bottom: 1rem;
}
.pb4 {
  padding-bottom: 2rem;
}
.pb5 {
  padding-bottom: 4rem;
}
.pb6 {
  padding-bottom: 8rem;
}
.pb7 {
  padding-bottom: 16rem;
}
.pt0 {
  padding-top: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pt6 {
  padding-top: 8rem;
}
.pt7 {
  padding-top: 16rem;
}
.pv0 {
  padding-top: 0;
  padding-bottom: 0;
}
.pv1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.pv2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pv3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pv4 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pv5 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.pv6 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}
.pv7 {
  padding-top: 16rem;
  padding-bottom: 16rem;
}
.ph0 {
  padding-left: 0;
  padding-right: 0;
}
.ph1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.ph2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}
.ph3 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.ph4 {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
.ph5 {
  padding-left: 4rem;
  padding-right: 4rem;
}
.ph6 {
  padding-left: 8rem;
  padding-right: 8rem;
}
.ph7 {
  padding-left: 16rem;
  padding-right: 16rem;
}
.ma-auto {
  margin: 0 auto;
}
.ma0 {
  margin: 0 !important;
}
.ma1 {
  margin: 0.25rem;
}
.ma2 {
  margin: 0.5rem;
}
.ma3 {
  margin: 1rem;
}
.ma4 {
  margin: 2rem;
}
.ma5 {
  margin: 4rem;
}
.ma6 {
  margin: 8rem;
}
.ma7 {
  margin: 16rem;
}
.ml0 {
  margin-left: 0;
}
.ml1 {
  margin-left: 0.25rem;
}
.ml2 {
  margin-left: 0.5rem;
}
.ml3 {
  margin-left: 1rem;
}
.ml4 {
  margin-left: 2rem;
}
.ml5 {
  margin-left: 4rem;
}
.ml6 {
  margin-left: 8rem;
}
.ml7 {
  margin-left: 16rem;
}
.mr0 {
  margin-right: 0;
}
.mr1 {
  margin-right: 0.25rem;
}
.mr2 {
  margin-right: 0.5rem;
}
.mr3 {
  margin-right: 1rem;
}
.mr4 {
  margin-right: 2rem;
}
.mr5 {
  margin-right: 4rem;
}
.mr6 {
  margin-right: 8rem;
}
.mr7 {
  margin-right: 16rem;
}
.mb0 {
  margin-bottom: 0;
}
.mb1 {
  margin-bottom: 0.25rem;
}
.mb2 {
  margin-bottom: 0.5rem;
}
.mb3 {
  margin-bottom: 1rem;
}
.mb4 {
  margin-bottom: 2rem;
}
.mb5 {
  margin-bottom: 4rem;
}
.mb6 {
  margin-bottom: 8rem;
}
.mb7 {
  margin-bottom: 16rem;
}
.mt0 {
  margin-top: 0;
}
.mt1 {
  margin-top: 0.25rem;
}
.mt2 {
  margin-top: 0.5rem !important;
}
.mt3 {
  margin-top: 1rem;
}
.mt4 {
  margin-top: 2rem;
}
.mt5 {
  margin-top: 4rem;
}
.mt6 {
  margin-top: 8rem;
}
.mt7 {
  margin-top: 16rem;
}
.mv0 {
  margin-top: 0;
  margin-bottom: 0;
}
.mv1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.mv2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.mv3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.mv4 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.mv5 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.mv6 {
  margin-top: 8rem;
  margin-bottom: 8rem;
}
.mv7 {
  margin-top: 16rem;
  margin-bottom: 16rem;
}
.mh0 {
  margin-left: 0;
  margin-right: 0;
}
.mh1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.mh2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mh3 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mh4 {
  margin-left: 2rem;
  margin-right: 2rem;
}
.mh5 {
  margin-left: 4rem;
  margin-right: 4rem;
}
.mh6 {
  margin-left: 8rem;
  margin-right: 8rem;
}
.mh7 {
  margin-left: 16rem;
  margin-right: 16rem;
}
.na1 {
  margin: -0.25rem;
}
.na2 {
  margin: -0.5rem;
}
.na3 {
  margin: -1rem;
}
.na4 {
  margin: -2rem;
}
.na5 {
  margin: -4rem;
}
.na6 {
  margin: -8rem;
}
.na7 {
  margin: -16rem;
}
.nl1 {
  margin-left: -0.25rem;
}
.nl2 {
  margin-left: -0.5rem;
}
.nl3 {
  margin-left: -1rem;
}
.nl4 {
  margin-left: -2rem;
}
.nl5 {
  margin-left: -4rem;
}
.nl6 {
  margin-left: -8rem;
}
.nl7 {
  margin-left: -16rem;
}
.nr1 {
  margin-right: -0.25rem;
}
.nr2 {
  margin-right: -0.5rem;
}
.nr3 {
  margin-right: -1rem;
}
.nr4 {
  margin-right: -2rem;
}
.nr5 {
  margin-right: -4rem;
}
.nr6 {
  margin-right: -8rem;
}
.nr7 {
  margin-right: -16rem;
}
.nb1 {
  margin-bottom: -0.25rem;
}
.nb2 {
  margin-bottom: -0.5rem;
}
.nb3 {
  margin-bottom: -1rem;
}
.nb4 {
  margin-bottom: -2rem;
}
.nb5 {
  margin-bottom: -4rem;
}
.nb6 {
  margin-bottom: -8rem;
}
.nb7 {
  margin-bottom: -16rem;
}
.nt1 {
  margin-top: -0.25rem;
}
.nt2 {
  margin-top: -0.5rem;
}
.nt3 {
  margin-top: -1rem;
}
.nt4 {
  margin-top: -2rem;
}
.nt5 {
  margin-top: -4rem;
}
.nt6 {
  margin-top: -8rem;
}
.nt7 {
  margin-top: -16rem;
}

.tl {
  text-align: left;
}
.tr {
  text-align: right;
}
.tc {
  text-align: center;
}
.tj {
  text-align: justify;
}
.ttc {
  text-transform: capitalize;
}
.ttl {
  text-transform: lowercase;
}
.ttu {
  text-transform: uppercase;
}
.ttn {
  text-transform: none;
}
.f-6,
.f-headline {
  font-size: 6rem !important;
}
.f-5,
.f-subheadline {
  font-size: 5rem !important;
}
.f1 {
  font-size: 3rem !important;
}
.f2 {
  font-size: 2.25rem !important;
}
.f3 {
  font-size: 1.5rem !important;
}
.f4 {
  font-size: 1.25rem !important;
}
.f5 {
  font-size: 1rem !important;
}
.f6 {
  font-size: 0.875rem !important;
}
.f7 {
  font-size: 0.75rem !important;
}
`;

export default globalStyle;
