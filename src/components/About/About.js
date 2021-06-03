import React from 'react';
import styles from './About.module.css';
import { Ocktokit }  from '@octokit/rest';

const octokit = new Ocktokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoAboutUser: [],
    isError: false,
    errorMessage: ' '
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'TeadorAvesador'
    })
    .then(({ data }) => {
      this.setState({ 
        repoList: data,
        isLoading: false
      });
    })
    .catch(err => {
      this.setState({ 
        isLoading: false,
        isError: true,
        errorMessage: err
      });
    })

    octokit.users.getByUsername({
      username: 'TeadorAvesador'
    })
    .then(({data}) => {
      this.setState({ 
        infoAboutUser: data,
        isLoading: false,
      })
    })
    .catch(err => {
      this.setState({ 
        isLoading: false,
        isError: true,
        errorMessage: err
      });
    })
  };

  render() {
    const { isLoading, repoList, isError, errorMessage, infoAboutUser } = this.state;
    const Preloader = () => <div className={styles.preloader}></div>;

    return(
      <div className={styles.wrap}>
        {isLoading ? <Preloader /> :
          <div>
            <h1>Обо мне:</h1>
            {isError ? 'Во время получения данных с сервера возникла ошибка:' + errorMessage :
              <div className={styles.repo}>
                <b>Логин: {infoAboutUser.login}</b>
                <img src={infoAboutUser.avatar_url} alt='Фото пользователя' className={styles.user_avatar} />
                <h3>Мои репозитории:</h3>
                <ol className={styles.repo_list}>
                  {repoList.map(repo => (
                    <li key={repo.id} className={styles.repo_name_wrap}>
                      <a href={repo.svn_url} className={styles.repo_name}>{repo.name}</a>
                    </li>
                  ))}
                </ol>
              </div>
            }
          </div>
        }
      </div>
    )
  }
};

export default About;