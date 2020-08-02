import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(76, 36, 96, 1),
    rgba(141, 47, 100, 1)
  );
`

export const BoxForm = styled.div`
  background-color: #fff;
  width: 400px;
  height: 280px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, 0);
  padding: 20px;
  border-radius: 5px;
`

export const ContainerBrain = styled.div`
  text-align: center;
  margin-bottom: 25px;
`

export const Input = styled.input`
  width: 100%;
  background: #ebeff3;
  height: 50px;
  border: none;
  border-radius: 3px;
  margin-bottom: 10px;
  padding-left: 10px;
`

export const Submit = styled.input`
  width: 100%;
  background: #ea4c89;
  color: #fff;
  height: 50px;
  border: none;
  padding-left: 10px;
  text-align: center;
  cursor: pointer;
`

export const Title = styled.h3`
  width: 100%;
  color: #3f4d61;
  text-align: center;
  margin-bottom: 20px;
`
