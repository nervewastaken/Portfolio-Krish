import React from 'react';
import Image from 'next/image';


export default function Tech() {
  return(
    <div className="flex justify-center items-center p-24 gap-5">
  
    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
      <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={40} height={40} />
    </a>
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
     </a>

    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
      <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width={40} height={40} />
    </a>

    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
     <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
     </a>
    
     <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
     <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
      </a>

    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
    <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
  

    <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
    <Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width={50} height={40} className='w-[50px] h-[40px] bg-white'/> 
    </a>

    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
    </a>

    <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> 
    </a>

    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
     <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
    </a> 

    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> 
    </a>

    {/* Similarly add Image components for all other links */}
  
</div>

  )
}
