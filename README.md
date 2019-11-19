# cptcrunchy.github.io

# A personal website using ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developer-portfolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/saadpasta/developer-portfolio)  [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/86c52691ca3c46e4bf887d704c196824)](https://www.codacy.com/manual/saadpasta/developerFolio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=saadpasta/developerFolio&amp;utm_campaign=Badge_Grade)

```bash
# Open your developer console paste the token inside btoa
$ btoa("YOUR GITHUB TOKEN")
```

Copy your converted token and paste it in `/src/containers/project/Project.js`

```javascript
  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob("YOUR CONVERTED GITHUB TOKEN")}`
          }
        });
      }
    });
```

Change username to your github username to get your projects 

```javascript
    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "your github username") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })

```

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center">
        <a href="http://saadpasta.github.io">
            <img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt="Saad Pasta"/>
            <br />
            <sub><b>Saad Pasta</b></sub>
        </a>
        <br />
        <a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Code">💻</a>
        <a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Documentation">📖</a>
        <a href="#design-saadpasta" title="Design">🎨</a>
        <a href="#maintenance-saadpasta" title="Maintenance">🚧</a>
    </td>
    <td align="center">
        <a href="http://facebook.com/9inpachi">
            <img src="https://avatars2.githubusercontent.com/u/36920441?v=4" width="100px;" alt="Fawad Ali"/>
            <br />
            <sub><b>Fawad Ali</b></sub>
        </a>
        <br />
        <a href="#ideas-9inpachi" title="Ideas, Planning, & Feedback">🤔</a>
        <a href="https://github.com/saadpasta/developerFolio/commits?author=9inpachi" title="Code">💻</a>
    </td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

