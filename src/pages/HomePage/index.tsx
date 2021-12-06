import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'react-feather';

const HomePage = () => {
  return (
    <MainPageWrapper>
      <Container>
        <Link to="/search" style={{ textDecoration: 'none' }}>
          <SearchBarWrapper>
            <PlaceHolder>공방이름,지역,클래스명으로 검색</PlaceHolder>
          </SearchBarWrapper>
        </Link>
        <CategoryWrapper>
          {/* 1번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 2번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 3번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 4번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 5번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 6번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 7번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
          {/* 8번 */}
          <Link to="/category/pottery" style={{ textDecoration: 'none' }}>
            <CategoryItem>
              <BookOpen />
              <div>도자기</div>
            </CategoryItem>
          </Link>
        </CategoryWrapper>
        <BestClassesWrapper>
          <Title>금주의 인기 클래스</Title>
          <BestClassItemWrapper>
            {/* 1번 */}
            <Link to="/products/:id">
              <BestClassesItem>
                <BestClassesImg />
                <BestClassesTitle>1시간으로 크리스마스 트리 완성하기</BestClassesTitle>
              </BestClassesItem>
            </Link>

            {/* 2번 */}
            <BestClassesItem>
              <BestClassesImg />
              <BestClassesTitle>1시간으로 크리스마스 트리 완성하기</BestClassesTitle>
            </BestClassesItem>
            {/* 3번 */}
            <BestClassesItem>
              <BestClassesImg />
              <BestClassesTitle>1시간으로 크리스마스 트리 완성하기</BestClassesTitle>
            </BestClassesItem>
          </BestClassItemWrapper>
        </BestClassesWrapper>

        <NewClassesWrapper>
          <Title>신규 공방</Title>
          <NewClassesItemWrapper>
            {/* 1번 */}
            <Link to="/workshop">
              <NewClassesItem>
                <NewClassesImg />
                <NewClassesTitle>희진 공방</NewClassesTitle>
              </NewClassesItem>
            </Link>

            {/* 2번 */}
            <NewClassesItem>
              <NewClassesImg />
              <NewClassesTitle>희진 공방</NewClassesTitle>
            </NewClassesItem>
            {/* 3번 */}
            <NewClassesItem>
              <NewClassesImg />
              <NewClassesTitle>희진 공방</NewClassesTitle>
            </NewClassesItem>
            {/* 4번 */}
            <NewClassesItem>
              <NewClassesImg />
              <NewClassesTitle>희진 공방</NewClassesTitle>
            </NewClassesItem>
          </NewClassesItemWrapper>
        </NewClassesWrapper>
      </Container>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchBarWrapper = styled.section`
  width: 300px;
  height: 60px;
  border-radius: 16px;
  margin: 50px calc(50% - 150px);
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceHolder = styled.div`
  width: 290px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
  background-color: white;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
`;

const CategoryWrapper = styled.section`
  width: 300px;
  margin: 50px calc(50% - 150px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;
const CategoryItem = styled.div`
  color: black;
  padding: 5px;
`;
const Title = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 10px;
`;
const BestClassesWrapper = styled.section`
  width: 100%;
`;
const BestClassItemWrapper = styled.div`
  width: calc(100% - 40px);
  margin-left: 20px;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const BestClassesItem = styled.div`
  position: relative;
  margin-right: 10px;
`;
const BestClassesImg = styled.div`
  width: 200px;
  height: 100px;
  height: 120px;
  border-radius: 16px;
  background-color: grey;
`;
const BestClassesTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
`;

const NewClassesWrapper = styled.section`
  margin-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  overflow-x: auto;
`;
const NewClassesItemWrapper = styled.div`
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
`;
const NewClassesItem = styled.div`
  position: relative;
`;
const NewClassesImg = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 16px;
  background-color: grey;
`;
const NewClassesTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
`;
export default HomePage;
