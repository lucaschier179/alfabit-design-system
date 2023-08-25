import Button from "@/components/Button/Button";

export default function App() {
  return (
    <div className="flex justify-center items-center h-32 gap-4">
      <Button
        disabled
        className="disabled:bg-greenPormade/60"
      > {/* Estilização personalizada do botão */}
        Botão 1
      </Button>
    </div>
  )
}