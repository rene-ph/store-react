import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
         CardMedia,
         Grid,
         Divider, 
         TextField,
         } from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './Cart.styles';
import { remove, updateCartById } from '../../redux/cartSlice';
import { getItemByCategoryId } from '../../redux/selector/categories.selector';

const Cart = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const item = useSelector(getItemByCategoryId(props.id));

    const handleDeleteCart = () => {
        dispatch(remove({id: props.id}));
    }
    const handleChangeQty = (ev) => {
        if (ev.target.value > 0) {
            dispatch(updateCartById({
                id: props.id,
                prop: 'quantity',
                value: parseInt(ev.target.value, 10)
            }));
            dispatch(updateCartById({
                id: props.id,
                prop: 'price',
                value: ((item.price * parseInt(ev.target.value, 10)))
            }));
        }
    }

    return (
        <>
            <Divider/>
                <Grid container 
                      alignItems='center'
                      className={classes.root} 
                      spacing={3}
                      >
                    <Grid item xs={12} lg={2}>
                        <CardMedia
                            className={classes.media}
                            image={props.imageUrl}
                            title="article"/>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <p>{props.name}</p>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <TextField label="Quantity" 
                                   variant="outlined"
                                   type="number" 
                                   align="center"
                                   disabled={props.readOnly}
                                   onChange={handleChangeQty}
                                   value={props.quantity} >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} lg={2} align="center">
                        <p>${props.price}</p>
                    </Grid>
                    { !props.readOnly ? (
                        <Grid item xs={12} lg={2} align="center">
                            <DeleteIcon onClick={handleDeleteCart}/>
                        </Grid>
                    ) : null}
      
                </Grid>
            <Divider/>
        </>
    )
}

export default Cart
