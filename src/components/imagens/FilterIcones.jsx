/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import girl from '../../assets/img/icon-girl.png';
import monster from '../../assets/img/icon-monster.png'

export default (type) =>{
    const FilterIcones = {
        Girl: <img src={girl} alt="Girl"/>,
        Monster: <img src={monster} alt="Girl"/>,
};
    return FilterIcones[type];
};
