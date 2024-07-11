import { ReactNode } from 'react';
import { Modal } from 'antd';
import { RiCloseLine } from '@remixicon/react';

type Props = {
  title?: ReactNode;
  content: ReactNode;
};
export const modalWindow = ({ content }: Props) => {
  Modal.confirm({
    content,
    closable: true,
    closeIcon: <RiCloseLine />,
    footer: false,
    icon: <></>,
  });
};
