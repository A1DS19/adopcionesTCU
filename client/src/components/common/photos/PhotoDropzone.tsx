import React from 'react';
import { useDropzone } from 'react-dropzone';

declare global {
  interface File {
    preview: string;
  }
}

interface Props {
  setFiles: React.Dispatch<React.SetStateAction<never[]>>;
}

export const PhotoDropzone: React.FC<Props> = ({ setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div style={{ marginTop: '10px' }}>
      <section>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            Arrastre o click aqui para subir foto
          </p>
        </div>
      </section>
    </div>
  );
};

const style = { border: 'dashed', height: '100px', cursor: 'pointer' };
