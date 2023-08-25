import Button from "@/components/Button/Button";
import LinkButton from "@/components/Link/LinkButton";

export default function App() {
  return (
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
  )
}