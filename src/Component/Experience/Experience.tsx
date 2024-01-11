import ExperienceStyle from "./ExperienceStyle";

export interface experienceType {
  title: string;
  body: string[];
}

const Experience = ({ title, body }: experienceType) => {
  return (
    <ExperienceStyle>
      <div className='experience__container'>
        <h3>{title}</h3>
        <ul className='ul'>
          {body &&
            body.map((txt: any, i: any) => {
              return <li key={i}>• {txt}</li>;
            })}
        </ul>
      </div>
    </ExperienceStyle>
  );
};

export default Experience;
