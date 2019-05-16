import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
    .nav_wrapper{
      margin-top: 150px;
      display: flex;
      position: relative;
    }
    .nav_item{
      color: #91989f;
      margin-right: 60px;
      font-weight: 500;
      font-size: 14px;
      box-sizing: content-box;
      padding-top: 20px;
      border-top: 2px white solid;
      cursor: pointer;
    }
    .select{
      color: black;
      border-top: 2px black solid;
    }
    
    .works_wrapper{
      position: relative;
      display: flex;
      margin-top: 80px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .work_item{
      width: 480px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .work_item:hover img {
	  -webkit-transform: scale3d(1.1,1.1,1);
	  transform: scale3d(1.1,1.1,1);
    }
    .image_wrapper{
      width: 480px;
      height: 270px;   
	  overflow: hidden;
    }
    .work_image{
      width: 480px;
      height: 270px;   
      -webkit-transition: opacity 1s, -webkit-transform 0.5s;
	  transition: opacity 1s, transform 0.5s;
    }
    .work_title{
      font-weight: 500;
      font-size: 16px;
      color: #000;
      margin: 20px 0;
    }
    .work_desc{
      font-size: 14px;
      color: #000;
    }
`;