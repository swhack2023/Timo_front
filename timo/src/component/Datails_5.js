import React from 'react';
import Nav from './Navar';
import './mapstyle.css';

import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import data_5 from '../img/Data_5.jpg';


const Details_5 = () => {

    const main = () => {
        window.location.href = "/"
    }

    const BS5 = () => {
        window.location.href = "/BS5"
    }

    return (
        <div style={{}} >
            <Nav />
            <img src={data_5} className='mintlover' />

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'c' }}>

                <ListItem>
                    <ListItemText >
                        <strong>
                            노블테라스아파트
                        </strong>

                    </ListItemText>
                </ListItem>
                <ListItem>

                    <ListItemText >
                        <div style={{ fontSize: '14px', color: 'gray' }}>
                            서울특별시 강남구 삼성동 112<br />
                            사용시간: 9:00AM~17:00PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수용인원:1~5명
                        </div>

                    </ListItemText>

                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText >
                        <div style={{ fontSize: '11px', color: 'gray' }}>
                            노블테라스아파트 1층에 위치한 공동육아 놀이시설 입니다.<br />
                            5세부터 7세까지 이용가능한 시설입니다.
                        </div>

                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>

                    <ListItemText >

                        <div style={{ fontSize: '11px', color: 'gray' }}>
                            <div style={{ fontSize: '15px' }}>주의 사항</div>
                            *해당 시설은 2세부터 6세까지 이용가능한 시설입니다. <br/>
                            *중식이 제공되며 알러지 밑 특이사항이 있다면 사전에 고지해주세요<br/>
                            *인원초과시, 일과 육아를 병행하는 학부모님에게 우선권이 주어집니다.<br/>
                            *아이에게 특이사항이 있다면 담당 선생님께 전달 부탁드립니다<br/>
                        </div>

                    </ListItemText>
                </ListItem>
            </div>


            <div style={{ marginTop: '30px', marginLeft: '15px' }}>
                <Grid container spacing={2} style={{ marginTop: '10px' }}>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={main} style={{ backgroundColor: 'gray' }}>
                            <ArrowBackIosIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Button onClick={BS5} style={{ backgroundColor: '#CBE23A', color: 'black', width: '90%' }}>
                            예약하기
                        </Button>
                    </Grid>
                </Grid>

            </div>


        </div>
    );
};

export default Details_5;