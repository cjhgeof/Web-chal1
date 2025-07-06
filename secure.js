function checkPassword(username, password)
{
  if( username === 'admin' && password === 'ThisisaStrongPassword' )
  {
    return true;
  }
  else
  {
    return false;
  }
}

