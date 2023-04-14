import React from "react";

import { Context } from "App/Context";
import classNames from "classnames";
import ScrollableSection from "components/ScrollableSection/ScrollableSection";
import Title from "components/Title/Title";

import styles from "./Page2.module.css";

const Page2 = () => {
  const context = React.useContext(Context);
  return (
    <div>
      <div
        className={
          context.fireAnimation
            ? classNames(styles.particles, styles.animated)
            : styles.particles
        }
      >
        <img src={require("styles/images/particles/5.png")} alt="p1" />
        <img src={require("styles/images/particles/5.png")} alt="p2" />
        <img src={require("styles/images/particles/5.png")} alt="p3" />
        <img src={require("styles/images/particles/5.png")} alt="p4" />
        <img src={require("styles/images/particles/5.png")} alt="p5" />
      </div>

      <Title leftTitle={"Текст сообщения"} />
      <ScrollableSection>
        <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br /> Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
        tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
        felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
        dignissim diam quis enim lobortis. Est sit amet facilisis magna.
        <br /> Neque laoreet suspendisse interdum consectetur libero id.
        <br />
        Nec ullamcorper sit amet risus nullam eget felis eget.
        <br />
        Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
        <br />
        Euismod quis viverra nibh cras pulvinar mattis nunc.
        <br />
        Massa massa ultricies mi quis. Sit amet massa vitae tortor condimentum
        lacinia. Et malesuada fames ac turpis egestas
        <br />
        integer eget. Elementum pulvinar etiam non quam lacus suspendisse
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam
        nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Vitae aliquet
        nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
        sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
        lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
        interdum consectetur libero id. Nec ullamcorper sit amet risus nullam
        eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin
        tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc. Massa
        massa ultricies mi quis. Sit amet massa vitae tortor condimentum
        lacinia. Et malesuada fames ac turpis egestas integer eget. Elementum
        pulvinar etiam non quam lacus suspendisse.
      </ScrollableSection>
    </div>
  );
};

export default Page2;
