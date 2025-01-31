import Avatar from "@/components/Avatar/Avatar";
import Box from "@/components/Box/Box";
import Button from "@/components/Button/Button";
import Divider from "@/components/Divider/Divider";
import { Input } from "@/components/Inputs/Inputs";
import LinkButton from "@/components/Link/LinkButton";
import Notice from "@/components/Notice/Notice";
import Switch from "@/components/Switch/Switch";
import TextBlock from "@/components/TextBlock/TextBlock";
import Typography from "@/components/Typography/Typography";

export default function App() {
  return (
    <div className="flex flex-col justify-center w-4/5 h-screen mx-auto my-0">
      <div className="flex justify-center items-center h-32 gap-4">
        <Button
          disabled
          className="disabled:bg-greenPormade/60"
        > {/* Estilização personalizada do botão */}
          Botão
        </Button>
        <LinkButton aria-disabled className="text-lime-200 aria-disabled:text-lime-500">
          Clique Aqui
        </LinkButton>
      </div>
      <div className="flex flex-col justify-center items-center h-32 gap-4">
        <Input label="Cadastro:" className="" />
        {/* <InputOrTextArea className="w-80 disabled:bg-darkGreen/30" /> */}
      </div>
      <div>
        <Typography>
          Testando o componente de tipografia
        </Typography>
      </div>
      <div>
        <Divider />
        <Divider>
          Testando Divider
        </Divider>
        <Divider />
      </div>
      <Box>
        Testando componente Box
      </Box>
      <TextBlock>
      </TextBlock>
      <div className="flex items-center justify-center pt-4">
        <Avatar size="3xl" />
      </div>
      <Notice type="alert" message="Teste componente Notice">
      </Notice>
      <div className="flex flex-col justify-center py-4">
        <Switch variant="contract" />
      </div>
    </div>
  )
}