import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Botao from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Botao variant="contained" color="primary">Home</Botao>
      <Botao variant="contained" color="secondary" href="/conta">Conta</Botao>
      <Botao variant="contained" color="primary" href="/forum">Fórum</Botao>
      <Botao variant="contained" color="secondary" href="/trocas">Trocas</Botao>

    </div>
  );
}
