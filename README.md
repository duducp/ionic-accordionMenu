Accordion Menu - Ionic 3 e Angular 4
=====================

![Alt text](/img.gif "Exemplo do componente em ação")

## Instalação

Copie a pasta "accordion-controller" para o diretório do seu projeto, normalmente fica no caminho: "src/components/".

Após isso importe o módulo na sua aplicação, para assim poder utilizá-lo.

Ex.:
No app.module.ts e adicione as sguintes linhas:
```bash
import { AccordionControllerModule } from '../components/accordion-controller/accordionController.module';
```

E logo mais dentro do 'imports' @NgModule adicione:
```bash
AccordionControllerModule
```

Ficando parecido com isso:
```bash
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccordionControllerModule,
    IonicModule.forRoot(MyApp)
  ],
```

## Utilização

```bash
<accordion
    title="Título do Menu"
    headerColor="primary"
    iconArrowColor="light"
    iconName="home"
    iconColor="light"
    contentColor="light"
    open="false"
>
Aqui fica o conteúdo que será mostrado após o menu ser expandido.
</accordion>
```
### Descrição
- title: descrição que é mostrado no header;
- headerColor: cor de fundo do header. Padrão: primary;
- contentColor: cor de fundo do content. Padrão: light;
- iconArrowColor: cor do arrow do menu. Padrão: light;
- iconName: nome do icone que deseja mostrar no header. Deixe em branco para não mostrar nenhum ícone;
- iconColor: cor do icone que será mostrado no header. Padrão: light;
- open: deixe como TRUE se você quer que ele inicie expandido. Padrão: false;
