import './App.css';
import 'bulma/css/bulma.css';
import Course from './Course';

const courses = [
  {
    title: 'Angular',
    description:
      'Angular Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?',
  },
  {
    title: 'React',
    description:
      'React Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?',
  },
  {
    title: 'Bootstrap',
    description:
      'Bootstrap Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?',
  },
  {
    title: 'Komple Web',
    description:
      'Komple Web Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?',
  },
];

function App() {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            {courses.map((course, index) => {
              return (
                <div className="column" key={index}>
                  <Course
                    title={course.title}
                    description={course.description}
                  />
                </div>
              );
            })}

            {/* <div className="column">
              <Course
                title="React"
                description="React Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?"
              />
            </div>
            <div className="column">
              <Course
                title="Bootstrap"
                description="Bootstrap Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?"
              />
            </div>
            <div className="column">
              <Course
                title="Komple Web"
                description="Komple Web Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et nostrum autem dolore eligendi nemo quae, veritatis recusandae quaerat pariatur odit ipsum. Quaerat voluptas ipsam quis earum consequuntur officiis assumenda?"
              />
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
