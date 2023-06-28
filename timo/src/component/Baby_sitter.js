import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Calendar, theme } from 'antd';

const Baby_sitter = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
    return (
        <Box 
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <div style={wrapperStyle}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>

            이름 <TextField id="outlined-size-small" size="small"/>
            <br/>
            나이 <TextField id="outlined-size-small" size="small"/>
            <br/>
            성별 
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </FormControl>
            <br/>
            휴대전화 <TextField id="outlined-size-small" size="small"/>
            <br/>
            <Button variant="contained" disableElevation>봐줄게요!</Button>
            <br/>
            <Button variant="contained" disableElevation>봐주세요!</Button>
        </Box>
    );
};

export default Baby_sitter;