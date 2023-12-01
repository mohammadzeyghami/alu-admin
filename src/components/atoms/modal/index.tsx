import { Modal as AntdModal, ModalProps } from "antd";

const Modal = ({ ...rest }: ModalProps) => {
  return <AntdModal {...rest} />;
};

export { Modal };
