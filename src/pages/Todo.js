import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import React, { useState } from 'react'
import Input from '../components/Input'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { addTodo, listTodo, removeTodo } from '../Recoil/Selectors/List'
import { DeleteOutlineRounded } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Todo() {
  const validasi = {
    todo: (value) => {
      if (value === '') {
        return 'tidak boleh kosong'
      } else if (value.length < 3) {
        return 'minimal 3 karakter'
      } else {
        return ''
      }
    },
  }
  const [state, setstate] = useState({
    todo: '',
  })
  const [error, setError] = useState({
    todo: '',
  })
  const listData = useRecoilValue(listTodo)
  const remove = useSetRecoilState(removeTodo)
  const add = useSetRecoilState(addTodo)

  const onChange = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value })
    setError({ ...error, [e.target.id]: validasi[e.target.id](e.target.value) })
  }
  const onClick = () => {
    add(state.todo)

    setstate({ ...state, todo: '' })
  }

  return (
    <div>
      <Container maxWidth='sm'>
        <h1 align='center'>Todo</h1>
        <Input
          id='todo'
          label='Masukan todo'
          onChange={onChange}
          value={state.todo}
          error={error.todo}
        />
        <Button variant='contained' color='primary' fullWidth onClick={onClick}>
          Tambah Todo
        </Button>
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
        <Link to='/list'>Ke halaman list</Link>
      </Container>
    </div>
  )
}

export default Todo
