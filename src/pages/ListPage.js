import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { listTodo, removeTodo } from '../Recoil/Selectors/List'
import { DeleteOutlineRounded } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Todo() {
  const listData = useRecoilValue(listTodo)
  const remove = useSetRecoilState(removeTodo)

  return (
    <div>
      <Container maxWidth='sm'>
        <h1 align='center'>Todo</h1>
        {listData.count > 0 ? (
          <List>
            {listData.data.map((todo) => (
              <ListItem key={todo.id}>
                <ListItemText primary={todo.judul} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => remove(todo.id)}>
                    <DeleteOutlineRounded />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <h5>{listData.data}</h5>
        )}
        <Link to='/todo'>Ke halaman list</Link>
      </Container>
    </div>
  )
}

export default Todo
