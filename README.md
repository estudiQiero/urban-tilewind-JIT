Div. 03.09.2021

Primer projecte realitzat amb el framework Tailwind.

Aprofitant la feina encarregada aquest Agost de 2021 per un client, es realitza una landing molt senzilla treballant amb la base del framework Tailwind CSS.

La primera versió es va treballar enllaçant amb el CDN. <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"> De fet, la versió online encara està així.

![Screenshot](/img/PLanding-Urban-1.jpg)

Més endavant, un cop acabada i amb la tranquilitat que dona la feina feta i el client content, investigo com treballar la fase de depuració del codi resultant de Tailwind.

La purga, m'agrada aquesta paraula ja que em recoda la película, o la depuració del codi CSS, de les classes no utilitzades de Tailwind és el major mal de cap en aquest inici amb el framework. Quan no coneixes com funciona aquesta eina, treballes, aprens i sembla que tot comença a creixer. Quan decideixes pujar el producte final t'enadones que res funciona com hauria de funcionar. Llavors és quan comencen els mal de caps esmentats.

![Screenshot](/img/PLanding-Urban-2.jpg)

En aquesta versió pujada, ja s'ha eliminat la versió de CDN i s'ha treballat íntegrament en local, depurant el arxiu CSS i rebaixant-lo a 15kb, ademés de integrar las classes pròpies tractades amb SASS. Recordem que tot el conjunt de classes del framework pesa unes 4.000kb.

Al styles.css definitiu, es pot apreciar el punt on acaben les classes pròpies de Tailwind, i on comencen les desenvolupades pel client. Si es fa una búsqueda al códi, el canvi es trova amb aquest comentari:

/* Códi propi per Miq 2021 */