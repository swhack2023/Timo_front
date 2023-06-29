import React from 'react';
import Nav from './Navar';
import './mapstyle.css';

import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import data_3 from '../img/Data_3.jpg';

const Details_3 = () => {

    const main = () => {
        window.location.href = "/"
    }

    const BS3 = () => {
        window.location.href = "/BS3"
    }

    return (
        <div style={{}} >
            <Nav />
            <img src={data_3} className='mintlover' />

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'c' }}>

                <ListItem>
                    <ListItemText >
                        <strong>
                            삼성대우멤버스카운티1차
                        </strong>

                    </ListItemText>
                </ListItem>
                <ListItem>

                    <ListItemText >
                        <div style={{ fontSize: '14px', color: 'gray' }}>
                            서울특별시 강남구 삼성동 98-18<br />
                            사용시간: 9:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~7명
                        </div>

                    </ListItemText>

                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText >
                        <div style={{ fontSize: '11px', color: 'gray' }}>
                            삼성대우멤버스카운티1차 1층에 위치한 공동육아 놀이시설 입니다.<br />
                            2세부터 7세까지 이용가능한 시설입니다.
                        </div>

                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>

                    <ListItemText >

                        <div style={{ fontSize: '11px', color: 'gray' }}>
                            <div style={{ fontSize: '15px' }}>주의 사항</div>
                            *해당 시설은 2세부터 6세까지 이용가능한 시설입니다.
                            *인원초과시, 일과 육아를 병행하는 학부모님에게 우선권이 주어집니다.
                            *아이에게 특이사항이 있다면 담당 선생님께 전달 부탁드립니다
                        </div>

                    </ListItemText>
                </ListItem>
            </div>

            <div style={{ marginTop: '40px', marginLeft: '15px' }}>
                <Grid container spacing={2} style={{ marginTop: '10px' }}>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={main} style={{ backgroundColor: 'gray' }}>
                            <ArrowBackIosIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Button onClick={BS3} style={{ backgroundColor: '#CBE23A', color: 'black', width: '90%' }}>
                            예약하기
                        </Button>
                    </Grid>
                </Grid>
            </div>


        </div>
    );
};

export default Details_3;