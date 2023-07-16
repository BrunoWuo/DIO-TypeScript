import { Box, Center, Input } from '@chakra-ui/react'
import { AppButton } from './AppButton'

interface ICard {
  id: number
  paragraph: string
  textButton: string
  userName?: string
}

export const Card = ({ id, paragraph, textButton, userName }: ICard) => {
  return (
    <div id={`${id}`}>
      <Box minHeight="100vh" backgroundColor="#134134" padding="25px">
        <Box backgroundColor="#ebf5df" borderRadius="25px" padding="15px">
          <Center marginBottom={5} fontWeight="bold">
            <h1>{paragraph}</h1>
          </Center>
          <Input
            type={'text'}
            placeholder="Informe seu e-mail..."
            borderColor="#bad4aa"
            marginBottom={5}
          />
          <Input
            type={'password'}
            placeholder="Informe sua senha..."
            borderColor="#bad4aa"
            marginBottom={5}
          />
          <Center>
            <AppButton caption={textButton} />
          </Center>
        </Box>
      </Box>
    </div>
  )
}
