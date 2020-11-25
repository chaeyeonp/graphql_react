# 🛠 Graphql_react Mini Project

Grapql, Apollo, React를 사용해 rocket 발사여부와 detail을 정리해 놓은 project


### 실행 방법

```
git clone "https://github.com/chaeyeonp/graphql_react"
    
npm install

npm run dev

```

## 📝 사용언어, 기술스택

![Generic badge](https://img.shields.io/badge/language-GraphQL-skyblue.svg)
![Generic badge](https://img.shields.io/badge/framework-React-green.svg)
![Generic badge](https://img.shields.io/badge/server-Apollo-green.svg)


<br><br>

## 📕 주요 NPM version
| 패키지명 | 버전 | 설명 |
| -------- | ---- | ---- |
| CORS|  [![NPM Version](https://img.shields.io/npm/v/cors.svg)](https://www.npmjs.com/package/cors)|미들웨어(CORS 에러 해결)|
|Cocurrently|[![NPM Badge](https://nodei.co/npm/concurrently.png?downloads=true)](https://www.npmjs.com/package/concurrently)|동시에 multiple command 명령어 하나로 돌리기|
|Apollo-boost|![npm version](https://badge.fury.io/js/%40apollo%2Fclient.svg)|Apollo Client 시작|
|React-apollo|![npm version](https://badge.fury.io/js/react-apollo.svg)| GraphQL 서버에서 데이터를 가져와 React 프레임 워크를 사용|
|Moment|![NPM version](https://img.shields.io/npm/v/moment.svg?style=flat)|날짜 데이터들을 변경,비교,계산|

<br>

## 🎛 GraphQL

### Launch_Type

```
flight_number: {type: GraphQLInt},
mission_name: {type: GraphQLString},
launch_year: {type: GraphQLString},
launch_date_local: {type: GraphQLString},
launch_success: {type: GraphQLBoolean},
rocket: {type: RocketType}
```

### Rocket_Type

```
rocket_id: {type: GraphQLString},
rocket_name: {type: GraphQLString},
rocket_type: {type: GraphQLString}
```

### API 통신

```
    fields: {
        launches: {
            type : new GraphQLList(LaunchType),
            resolve(parent,args){
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        launch:{
            type: LaunchType,
            args: {
                flight_number:{ type: GraphQLInt}
            },
            resolve(parent,args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res=>res.data);
        }

        },
        rockets: {
            type : new GraphQLList(RocketType),
            resolve(parent,args){
                return axios.get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data);
            }
        },
        rocket:{
            type: RocketType,
            args: {
                id:{ type: GraphQLInt}
            },
            resolve(parent,args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.id}`)
                    .then(res=>res.data);
            }

        }
        }

```

## 🎛 Apollo Server & React

### Provider

```
<ApolloProvider client={client}>
            <Router>
                    <Route exact path="/" component={Launches} />
                    <Route exact path="/launch/:flight_number" component={Launch} />
            </Router>
        </ApolloProvider>
```

### Query
```
<Query query={LAUNCH_QUERY} variables={{flight_number}}>
        {
           ({loading, error, data}) => {
                  if (loading) return <h4>Loading...</h4>
                  if (error) console.log(error)

                            const {
                                [fields]
                            } = data.launch;

                            return ([html file])
                            })
      
       }                     
</Query>
            
```
## 💻 최종화면

### 1. Main Page
<img width="512" alt="Main Page" src="https://user-images.githubusercontent.com/61309080/100190060-d9909900-2f30-11eb-9ba1-63dc6ce6fe66.png">

### 2. Detail Page
<img width="512" alt="Detail Page" src="https://user-images.githubusercontent.com/61309080/100190063-da292f80-2f30-11eb-95f6-150f6d69415d.png">
