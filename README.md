# Senicare
### 개요
코리아아이티아카데미부산  
[산대특] 빅데이터 활용 클라우드 SaaS 기반 시니어케어 ERP 개발 과정

요양사를 위한 고객, 인사, 물자 관리 ERP프로젝트

#### packge
react-router react-router-dom, react-cookie, zustand, axios

###### 패키지 설치
```bash
$ npm install react-router react-router-dom, react-cookie, zustand, axios
```
###### 개발 모드 실행
```bash
$ npm run start
```
###### 개발 빌드
```bash
$ npm run build
```

#### 네이게이션 구조
**/auth** : 로그인 및 회원가입  
  
**/cs** :  고객관리 (고객 리스트 보기)  
**/cs/write** : 고객등록  
**/cs/:customNumber** : 고객 상세 보기  
**/cs/:customNumber/update** : 고객 수정 화면  

**/mm** : 용품관리  (용품 리스트 보기)

**/hr** : 인사관리 (인사 리스트 보기)  
**/hr/:userId** : 인사 정보 상세 보기  
**/hr/:userId/update** : 인사 정보 수정하기  


```
***

### 폴더 구조
- apis: 외부 APU 연결 함수
- assets: 컴포넌트에서 사용될 정적 자원
- components: 공통 검포넌트
- constants: 공통 상수
- hoos: 공통 훅 함수
- layouts: 공통 레이아웃 컴포넌트
- stores: 글로벌 상태 스토어
- types: 공통 타입
- utils: 공통 상수
- view: 페이지 별 화면 컴포넌트  
