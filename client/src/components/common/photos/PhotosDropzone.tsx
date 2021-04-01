import React from 'react';
import Dropzone, {
  IFileWithMeta,
  IStyleCustomization,
  StatusValue,
} from 'react-dropzone-uploader';

interface Props {
  handleSubmit: (files: IFileWithMeta[], allFiles: IFileWithMeta[]) => void;
  setFiles: React.Dispatch<React.SetStateAction<never[]>>;
}

export const PhotosDropzone: React.FC<Props> = ({ handleSubmit, setFiles }) => {
  const handleChangeStatus = ({ meta, remove }: any, status: StatusValue) => {
    setFiles(meta);
  };

  const styles: IStyleCustomization<React.CSSProperties> = {
    submitButton: { backgroundColor: 'orange' },
    inputLabel: { color: 'black' },
    inputLabelWithFiles: { color: 'black' },
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      maxFiles={3}
      accept='image/*'
      inputContent='Arrastre o click aqui para subir foto'
      inputWithFilesContent={(files) => `Puede agregar ${3 - files.length} mas`}
      styles={styles}
    />
  );
};
