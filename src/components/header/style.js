import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    padding: 0;
    background: black;
    position: relative;
    width: 100%;
    min-width: 1000px;
    height: 100px;
    font-size: 20px;
    color: #91989f;
    font-weight: 500;
    .content{
      margin: auto;
      width: 1000px;
      display: flex;
      align-items: center;
      height: 100%;
    }
    .project_name{
      flex: 1;
    }
    .works{
      cursor: pointer;
    }
    .about{
      margin-left: 55px;
      cursor: pointer;
    }
    .active_style{
      color: white;
    }
    
`;