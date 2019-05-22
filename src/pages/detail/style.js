import styled from 'styled-components';

export const AboutWrapper = styled.div`
    width: 1080px;
    margin-left: -80px;
    margin-top: 150px;
    display: flex;
    .btn_back{
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    .work_info{
      margin:0 40px;
      width: 360px;
      display: flex;
      flex-direction: column;
    }
    .work_title{
      font-size: 30px;
      font-weight: 500;
      color: black;
    }
     .msg_14{
      margin-top: 10px;
      color: black;
      font-size: 14px;
      font-weight: 300;
    }
     .msg_12{
      margin-top: 10px;
      color: black;
      font-size: 12px;
      font-weight: 300;
    }
    .msg_16{
      color: black;
      font-size: 16px;
      line-height: 20px;
    }
    
    .time_style{
      margin-top: 30px;
    }
    
    .work_content{
      width: 600px;
      display: flex;
      flex-direction: column;
    }
    .images_wrapper{
      margin-top: 80px;
      margin-bottom: 60px;
    }
    .image_work{
      cursor: pointer;
      margin-bottom: 40px;
      width: 600px
    }
    
    

`;