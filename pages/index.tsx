import Button from "@/components/Button/Button";
import { Input } from "@/components/Inputs/Inputs";
import LinkButton from "@/components/Link/LinkButton";
import Typography from "@/components/Typography/Typography";

export default function App() {
  return (
    <>
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
    </>
  )
}