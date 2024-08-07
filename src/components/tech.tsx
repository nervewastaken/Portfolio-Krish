import React from "react";
import Image from "next/image";

export default function Tech() {
  return (
    <div>
      <div className="flex justify-center items-center py-4 lg:p-24 gap-5 min-w-[200px]">
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            className="w-[50px] h-[40px] bg-black"
          />
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
            className="w-[50px] h-[40px]"
          />
        </a>

        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            className="w-[50px] h-[40px] bg-white"
          />
        </a>

        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            className="w-[50px] h-[40px]"
          />
        </a>
      </div>
    </div>
  );
}

export function MLtech() {
  return (
    <div>
      <div className="flex justify-center items-center py-4 lg:p-24 gap-5">
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://pytorch.org/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"
            alt="pytorch"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
            alt="tensorflow"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a
          href="https://colab.research.google.com/"
          target="_blank"
          rel="noreferrer"
        >
          <CustomImage
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg"
            alt="google colab"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://jupyter.org/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg"
            alt="jupyter notebook"
            className="w-[50px] h-[40px]"
          />
        </a>
      </div>
    </div>
  );
}

export function DevOpstech() {
  return (
    <div>
      <div className="flex justify-center items-center py-4 lg:p-24 gap-5">
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
            alt="docker"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noreferrer">
          <CustomImage
            src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
            alt="aws ec2"
            className="w-[50px] h-[40px]"
          />
        </a>
        <a
          href="https://cloud.google.com/compute/"
          target="_blank"
          rel="noreferrer"
        >
          <CustomImage
            src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
            alt="gcp compute engine"
            className="w-[50px] h-[40px]"
          />
        </a>
      </div>
    </div>
  );
}

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};
