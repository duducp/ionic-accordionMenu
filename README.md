Accordion Menu - Ionic 3 e Angular 4
=====================

![Alt text](/img.gif "Exemplo do componente em ação")

### Instalação

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

### Utilização

```bash
<accordion
    title="Título do Menu"
    headerColor="primary"
    iconArrowColor="light"
    iconName="home"
    iconColor="light"
    contentColor="primary"
    open="true"
>
Aqui fica o conteúdo que será mostrado após o menu ser expandido.
</accordion>
```
