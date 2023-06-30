import React from 'react';
import Nav from './Navar';
import './mapstyle.css';
import data_1 from '../img/Data_1.jpg';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';


const Details = () => {



    const main = () => {
        window.location.href = "/"
    }

    const bs = () => {
        window.location.href = "/BS"
    }


    return (
        <div style={{}} >
            <Nav />
            <img src={data_1} className='mintlover' />

            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <ListItem>
                    <ListItemText >
                    <strong style={{fontSize:"23px"}}>
                            롯데캐슬프레미어아파트
                        </strong>

                    </ListItemText>
                </ListItem>
                <ListItem>

                    <ListItemText >
                        <div style={{ fontSize: '14px', color: 'gray' }}>
                            서울특별시 강남구 선릉로126길 22<br />
                            사용시간: 9:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~8명
                        </div>

                    </ListItemText>

                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText >
                    <div style={{ fontSize: '12px', color: 'gray',lineHeight:'150%' }}>
                            롯데캐슬프레미어아파트 101동 지하1층에 위치한 공동육아 놀이시설 입니다.
                            2세부터 6세까지 이용가능한 시설입니다.
                        </div>

                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>

                    <ListItemText >

                        <div style={{ fontSize: '11px', color: 'gray' }}>
                        <div style={{ fontWeight:'bold', fontSize: '15px', marginBottom: '10px'}}>주의 사항</div>
                            *해당 시설은 2세부터 6세까지 이용가능한 시설입니다.<br/>
                            *중식이 제공되며 알러지 밑 특이사항이 있다면 사전에 고지해주세요.<br/>
                            *인원초과시, 일과 육아를 병행하는 학부모님에게 우선권이 주어집니다.<br/>
                            *아이에게 특이사항이 있다면 담당 선생님께 전달 부탁드립니다
                        </div>

                    </ListItemText>
                </ListItem>
            </div>
            <div style={{ marginTop: '160px', marginLeft: '15px' }}>
                <Grid container spacing={2} style={{ marginTop: '10px' }}>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={main} style={{ backgroundColor: 'gray' }}>
                            <ArrowBackIosIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Button onClick={bs} style={{ backgroundColor: '#CBE23A', color: 'black', width: '90%' }}>
                            예약하기
                        </Button>
                    </Grid>
                </Grid>

            </div>

           
        </div>
    );
};

export default Details;