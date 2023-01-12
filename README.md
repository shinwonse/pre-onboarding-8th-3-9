# Clinical Trial Search App with React.js

## 클라이언트 배포 링크

[Clinical Trial Search App](https://pre-onboarding-8th-3-9.vercel.app/)

## 서버 배포 링크

[wanted-fe-9team-api](https://wanted-fe-9team-api.herokuapp.com/)

서버는 [assignment-api_8th](https://github.com/walking-sunset/assignment-api_8th)를 클론하여 배포했습니다. 기본적인 사용법은 링크를 따라가시면 볼 수 있습니다.

## 개발 과정 및 Best Practice

- [질환명 검색시 API 호출 통해서 검색어 추천 기능]()
- API 호출 최적화
  - [API 호출별로 로컬 캐싱 구현]()
  - [입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행]()
- [키보드만으로 추천 검색어들로 이동 가능하도록 구현]()

## 실행 방법

```bash
$ npm install
$ npm start
```

## 커밋 규칙

개발하시기 전에

```bash
$ npm run prepare
```

를 통해 `husky` 설치해주세요!

기본적인 커밋 규칙은 다음 가이드를 따릅니다. [Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

## 브랜치 전략

- main (배포용 브랜치)
- dev (개발용 브랜치)

각 기능을 개발할 때 `feat/example`과 같이 브랜치를 생성하여 dev 브랜치로 `push`하였습니다. 이후 배포에 적용할 때에 main에 올려 배포하였습니다.

## 협업 방법

<div>
  <img src="https://user-images.githubusercontent.com/62709718/208821813-5f880759-64e4-46d4-8d2f-9721d231f4ae.png" width="200px;" />
</div>

- 디스코드 음성 채널을 통해 회의를 진행하였습니다.
- 디스코드 웹훅을 설정하여 디스코드 채널로 알람을 받았습니다.

## 팀원

<table>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/211858707-046f5b18-b31f-40f1-ae24-6e992612cc5a.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676156-350f5e57-7568-497a-ba32-cf7f849ef688.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676069-16f11acd-8447-4d72-ab0b-f6e074373dea.png" width="100px;" alt=""/>
    </td>    
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676001-b838be17-a6da-4954-8382-7b537a359f2a.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208675953-3dbf10de-ed57-4b9a-9a5a-903dd5b8e708.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208675588-1fc2c6ec-0a10-4496-b7de-39cfbfa5e7ab.png" width="100px;" alt=""/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/dahui-sharon-kim">
        <div>dahui-sharon-kim</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jong-k">
        <div>jong-k</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Duck-98">
        <div>Duck-98</div>
      </a>
    </td>    
    <td align="center">
      <a href="https://github.com/shinwonse">
        <div>shinwonse (팀장)</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/abcabcp">
        <div>abcabcp</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dong53358">
        <div>dong53358</div>
      </a>
    </td>
  </tr>
</table>
