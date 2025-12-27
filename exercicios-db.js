// Arquivo: exercicios-db.js
// Contém a base de dados de exercícios e monta o bancoDeExercicios global

// Formato de cada linha:
// "Nome do Exercício | Modalidade | Categoria | músculos, separados, por, vírgula | descrição da execução | dica de segurança"

const rawData = [
    /* =========================
       MUSCULAÇÃO – PEITO
       ========================= */
    "Supino Reto com Barra | Musculação | Peito | peitoral maior, deltóide anterior, tríceps braquial | Deite-se no banco plano, pés firmes no chão. Segure a barra um pouco mais aberta que a largura dos ombros. Desça a barra em direção ao meio do peito controlando o movimento e empurre de volta até quase estender os cotovelos, sem travá-los. | Mantenha as escápulas retraídas, ombros para baixo e evite arquear demais a lombar. Não deixe a barra quicar no peito.",
    "Supino Inclinado com Barra | Musculação | Peito | peitoral maior (porção superior), deltóide anterior, tríceps braquial | Ajuste o banco em 30° a 45°. Deite-se com os pés firmes no chão. Segure a barra um pouco mais aberta que a largura dos ombros. Desça a barra em direção à parte superior do peito, controlando, e empurre de volta. | Não exagere na inclinação para não sobrecargar os ombros. Mantenha as escápulas retraídas e o pescoço relaxado.",
    "Supino Declinado com Barra | Musculação | Peito | peitoral maior (porção inferior), tríceps braquial, deltóide anterior | Deite-se no banco declinado com os pés bem apoiados. Segure a barra um pouco mais aberta que a largura dos ombros. Desça em direção à parte inferior do peito e empurre de volta. | Use auxílio para retirar e devolver a barra ao suporte. Evite movimentos bruscos para não tensionar o pescoço.",
    "Supino Reto com Halteres | Musculação | Peito | peitoral maior, deltóide anterior, tríceps braquial, estabilizadores do ombro | Deite-se no banco plano com um halter em cada mão, braços estendidos sobre o peito. Desça os halteres abrindo levemente os cotovelos, mantendo antebraços alinhados com o punho, e empurre de volta até quase estender. | Não deixe os halteres colidirem no topo. Controle toda a amplitude e mantenha os ombros para baixo.",
    "Supino Inclinado com Halteres | Musculação | Peito | peitoral maior (porção superior), deltóide anterior, tríceps | Deite-se em um banco inclinado com um halter em cada mão. Desça os halteres em direção à lateral do peito superior e empurre de volta. | Evite hiperextensão dos ombros; mantenha a escápula estável e use carga que permita controle total.",
    "Crucifixo com Halteres | Musculação | Peito | peitoral maior, deltóide anterior | Deite-se em um banco plano com halteres. Com braços quase estendidos, desça os halteres em arco lateral, sentindo alongar o peitoral, e retorne juntando-os sobre o peito. | Mantenha leve flexão nos cotovelos e evite descer além da amplitude confortável para proteger o ombro.",
    "Crucifixo Inclinado com Halteres | Musculação | Peito | peitoral maior (porção superior), deltóide anterior | Em um banco inclinado, com halteres, faça o movimento de abrir e fechar os braços em arco, mantendo leve flexão nos cotovelos. | Controle a descida, evite cargas excessivas e mantenha o core firme para estabilizar.",
    "Voador (Peck Deck) | Musculação | Peito | peitoral maior, deltóide anterior | Sentado na máquina, apoie as costas no encosto e antebraços nos apoios. Feche os braços à frente do peito e retorne controlando. | Ajuste o banco para que o ombro fique alinhado ao centro do equipamento. Não empurre com as mãos; use o peito.",
    "Crossover no Cabo Alto | Musculação | Peito | peitoral maior, deltóide anterior | Em pé, com um pegador em cada mão, parta com os braços abertos na linha dos ombros. Traga as mãos para frente e para baixo, cruzando levemente, e retorne abrindo em arco. | Mantenha leve inclinação do tronco, joelhos semiflexionados e abdômen ativo para não sobrecarregar a lombar.",

    /* =========================
       MUSCULAÇÃO – COSTAS
       ========================= */
    "Puxada Frontal na Barra Fixa | Musculação | Costas | latíssimo do dorso, bíceps braquial, rombóides, trapézio inferior | Segure a barra fixa com pegada pronada, um pouco mais aberta que a largura dos ombros. Puxe o corpo até o queixo passar a linha da barra, contraindo as costas, e desça controlando. | Evite balançar o corpo e não deixe os ombros subirem em excesso na fase final; mantenha o core firme.",
    "Puxada Frontal na Polia | Musculação | Costas | latíssimo do dorso, bíceps braquial, rombóides | Sentado, segure a barra da polia alta. Puxe a barra em direção à parte superior do peito, levando o peito levemente para frente, e retorne controlando. | Não puxe atrás da cabeça para evitar sobrecarga nos ombros e pescoço. Mantenha o peito alto.",
    "Remada Curvada com Barra | Musculação | Costas | latíssimo do dorso, eretores da espinha, bíceps braquial, rombóides | Em pé, flexione joelhos, incline o tronco à frente mantendo coluna neutra. Segure a barra com pegada pronada e puxe em direção ao abdômen, contraindo as costas, retornando lentamente. | Não arredonde a lombar. Comece com carga moderada e mantenha o core firme.",
    "Remada Baixa na Polia | Musculação | Costas | latíssimo do dorso, rombóides, trapézio médio, bíceps | Sentado no banco da máquina, pés apoiados, joelhos semi-flexionados. Puxe a barra em direção ao abdômen, aproximando as escápulas, e retorne estendendo os braços sem relaxar completamente. | Evite balançar o tronco para frente e para trás. O movimento é das escápulas e dos cotovelos.",
    "Puxada Neutra na Polia | Musculação | Costas | latíssimo do dorso, bíceps, trapézio inferior | Usando pegador neutro, puxe em direção ao peito mantendo os cotovelos próximos ao tronco. | Mantenha o pescoço alinhado e evite puxar com o tronco.",
    "Pull-Over com Halter | Musculação | Costas | latíssimo do dorso, peitoral maior, serrátil anterior | Deitado no banco, segurando um halter com ambas as mãos acima do peito, desça em arco atrás da cabeça, sentindo alongar, e retorne à posição inicial. | Não deixe a lombar arquear demais. Use carga que permita controle na parte mais alongada.",
    "Remada unilateral com Halter | Musculação | Costas | latíssimo do dorso, rombóides, deltoide posterior, bíceps | Apoie uma mão e um joelho no banco, tronco paralelo ao chão. Com a outra mão, puxe o halter em direção ao quadril, mantendo o cotovelo próximo ao tronco, e desça controlando. | Não gire o tronco. Pense em trazer o cotovelo para trás, não o halter para cima.",

    /* =========================
       MUSCULAÇÃO – OMBROS
       ========================= */
    "Desenvolvimento Militar com Barra | Musculação | Ombros | deltóide anterior, deltóide medial, trapézio superior, tríceps | Em pé, barra na altura dos ombros. Empurre a barra acima da cabeça até estender quase totalmente os cotovelos e desça controlando à posição inicial. | Não arqueie excessivamente a lombar. Aperte o abdômen e glúteos para estabilizar.",
    "Desenvolvimento com Halteres Sentado | Musculação | Ombros | deltóide anterior, deltóide medial, tríceps | Sentado com encosto, segure um halter em cada mão na altura das orelhas. Empurre os halteres para cima e una levemente no topo, retornando controlado. | Mantenha a coluna apoiada no encosto e evite jogar os halteres com impulso.",
    "Elevação Lateral com Halteres | Musculação | Ombros | deltóide lateral, trapézio superior (secundário) | Em pé, segurando halteres ao lado do corpo, eleve-os lateralmente até a altura dos ombros, com leve flexão dos cotovelos, e desça devagar. | Não eleve acima da linha dos ombros, e evite girar demais as mãos. Não balance o tronco.",
    "Elevação Frontal com Halteres | Musculação | Ombros | deltóide anterior | Em pé, com halteres à frente das coxas, eleve-os à frente até a altura dos ombros e desça controlando. | Use carga moderada para não sobrecarregar a articulação do ombro. Evite balanço do corpo.",
    "Remada Alta com Barra | Musculação | Ombros | deltóide lateral, trapézio superior | Em pé, segure a barra à frente das coxas, mãos na largura dos ombros. Puxe a barra em direção ao queixo, elevando os cotovelos, e desça controlando. | Evite usar cargas muito altas, pois esse exercício pode sobrecarregar a articulação do ombro se feito com técnica ruim.",
    "Encolhimento de Ombros com Halteres | Musculação | Ombros | trapézio superior | Em pé, halteres ao lado do corpo. Eleve os ombros em direção às orelhas e desça lentamente. | Não gire os ombros; faça movimento reto de subir e descer. Mantenha o pescoço neutro.",

    /* =========================
       MUSCULAÇÃO – BRAÇOS
       ========================= */
    "Rosca Direta com Barra | Musculação | Bíceps | bíceps braquial, braquial, braquiorradial | Em pé, segurando a barra com pegada supinada, afaste as mãos na largura dos ombros. Flexione os cotovelos trazendo a barra em direção ao peito e desça controlando. | Mantenha os cotovelos próximos ao corpo e evite balançar o tronco.",
    "Rosca Alternada com Halteres | Musculação | Bíceps | bíceps braquial, braquial | Em pé, com um halter em cada mão, alterne a flexão dos cotovelos, supinando o antebraço durante a subida. | Não gire o tronco nem balance o corpo. Controle a descida.",
    "Rosca Martelo | Musculação | Bíceps | braquiorradial, bíceps braquial, braquial | Segure os halteres com pegada neutra (polegares para cima). Flexione os cotovelos mantendo essa posição e desça controlando. | Esse movimento é ótimo para antebraço; use carga moderada para evitar tensão excessiva no cotovelo.",
    "Rosca Concentrada | Musculação | Bíceps | bíceps braquial | Sentado, apoie o cotovelo na parte interna da coxa. Flexione o antebraço trazendo o halter em direção ao peito e desça controlando. | Não mova o tronco para ajudar na subida. Toda a contração deve vir do bíceps.",
    "Tríceps Testa com Barra | Musculação | Tríceps | tríceps braquial (longa, medial, lateral) | Deitado no banco, segure a barra com as mãos na largura dos ombros. Flexione os cotovelos, trazendo a barra em direção à testa, e estenda de volta. | Mantenha os cotovelos fixos; não deixe abrir demais para fora. Use carga que permita segurança na articulação do cotovelo.",
    "Tríceps Corda na Polia | Musculação | Tríceps | tríceps braquial | Em pé diante da polia alta, segure a corda com pegada neutra. Inicie com os cotovelos flexionados a 90° e estenda até quase totalmente, abrindo a corda no final. | Mantenha o tronco ereto e os cotovelos próximos ao corpo para focar no tríceps.",
    "Mergulho em Paralelas (Dips) | Musculação | Tríceps | tríceps braquial, peitoral maior, deltóide anterior | Apoiado nas barras paralelas, desça o corpo flexionando os cotovelos até cerca de 90° e empurre de volta. | Se tiver histórico de lesão no ombro, use amplitude reduzida. Não deixe os ombros colapsarem para frente.",

    /* =========================
       MUSCULAÇÃO – PERNAS
       ========================= */
    "Agachamento Livre com Barra | Musculação | Pernas | quadríceps, glúteo máximo, isquiotibiais, eretores da espinha | Com a barra apoiada nas costas (trapézio), pés afastados na largura dos ombros, flexione joelhos e quadris descendo como se fosse sentar em uma cadeira e suba estendendo quadris e joelhos. | Mantenha a coluna neutra, joelhos alinhados com a ponta dos pés e calcanhares no chão. Comece com cargas leves.",
    "Agachamento Frontal com Barra | Musculação | Pernas | quadríceps, glúteo máximo, core | Com a barra apoiada na frente dos ombros, cotovelos altos, desça flexionando joelhos e quadris e suba retornando à posição inicial. | Exige boa mobilidade de punho e tornozelo; não deixe o tronco cair muito à frente.",
    "Leg Press 45° | Musculação | Pernas | quadríceps, glúteo máximo, isquiotibiais | Sentado na máquina, pés posicionados na plataforma, empurre a base até quase estender os joelhos e depois desça controlando a carga até uma flexão confortável. | Não deixe os joelhos colapsarem para dentro. Evite tirar o quadril do banco para não sobrecargar a lombar.",
    "Cadeira Extensora | Musculação | Pernas | quadríceps | Sentado na máquina, com o encosto ajustado, estenda os joelhos até quase total e retorne controlando. | Use carga moderada, principalmente em caso de dor no joelho. Não trave totalmente os joelhos no topo.",
    "Mesa Flexora | Musculação | Pernas | isquiotibiais | Deitado na máquina, apoie os calcanhares no rolete e flexione os joelhos aproximando o rolete dos glúteos. Retorne controlando. | Não arqueie a lombar. Mantenha o abdômen ativo.",
    "Cadeira Flexora | Musculação | Pernas | isquiotibiais | Sentado, com pernas estendidas, flexione os joelhos trazendo o rolete embaixo da cadeira e volte estendendo. | Ajuste bem a máquina para que o joelho fique alinhado ao eixo do equipamento.",
    "Cadeira Abdutora | Musculação | Pernas | glúteo médio, glúteo mínimo, tensor da fáscia lata | Sentado na máquina, afaste as pernas contra a resistência e retorne controlando. | Sente-se com coluna ereta e evite empurrar com a lombar.",
    "Cadeira Adutora | Musculação | Pernas | adutores da coxa | Sentado na máquina, aproxime as pernas contra a resistência e retorne controlando. | Não exagere na amplitude se houver desconforto na virilha. Use cargas progressivas.",
    "Panturrilha em Pé | Musculação | Panturrilha | gastrocnêmio, sóleo | Em pé, com os pés na plataforma, eleve os calcanhares contraindo a panturrilha e desça controlando. | Use apoio para equilíbrio. Não faça movimentos bruscos no final da amplitude.",
    "Panturrilha Sentado | Musculação | Panturrilha | sóleo, gastrocnêmio (secundário) | Sentado, com peso apoiado sobre as coxas, eleve os calcanhares e desça devagar. | Movimente apenas tornozelos, mantendo o resto do corpo estável.",

    /* =========================
       MUSCULAÇÃO – CORE
       ========================= */
    "Prancha Ventral | Musculação | Core | reto abdominal, transverso do abdome, oblíquos, estabilizadores da coluna | Apoie antebraços no chão e pés estendidos, formando uma linha reta dos ombros aos tornozelos. Mantenha o abdômen contraído sem deixar a lombar cair. | Comece com tempos curtos e aumente progressivamente. Evite prender a respiração.",
    "Prancha Lateral | Musculação | Core | oblíquos, quadrado lombar, estabilizadores da coluna | De lado, apoie um antebraço e o pé no chão, levantando o quadril até formar uma linha reta dos ombros aos pés. | Não deixe o quadril cair. Mantenha o pescoço alinhado.",
    "Abdominal Crunch | Musculação | Core | reto abdominal | Deitado, com joelhos flexionados e pés no chão, eleve o tronco em direção aos joelhos, focando em aproximar costelas da pelve, e retorne. | Não puxe o pescoço com as mãos. O movimento é curto e controlado.",
    "Abdominal Infra (Elevação de Pernas) | Musculação | Core | reto abdominal (porção inferior), flexores de quadril | Deitado, mãos sob o quadril ou ao lado, eleve as pernas unidas até cerca de 90° e desça controlando sem encostar totalmente no chão. | Mantenha a lombar próxima ao solo; se sentir dor, reduza a amplitude.",

    /* =========================
       CROSSFIT – FUNDAMENTAIS
       ========================= */
    "Air Squat | CrossFit | Pernas | quadríceps, glúteo máximo, isquiotibiais, core | Em pé, pés na largura dos ombros, flexione joelhos e quadris descendo até a coxa ficar paralela ou abaixo da paralela ao chão, e suba estendendo. | Mantenha o peso nos calcanhares, joelhos alinhados com os pés e tronco ereto.",
    "Front Squat | CrossFit | Pernas | quadríceps, glúteo máximo, core | Com a barra posicionada na frente dos ombros, cotovelos altos, agache mantendo o tronco o mais vertical possível e suba. | Exige mobilidade de punho e tornozelo; mantenha o abdômen firme para proteger a coluna.",
    "Overhead Squat | CrossFit | Pernas | quadríceps, glúteos, deltoides, trapézio, core | Com a barra acima da cabeça, braços estendidos, realize o agachamento mantendo a barra alinhada sobre a base dos pés. | Use carga muito leve no início. É um movimento avançado que exige mobilidade e estabilidade.",
    "Thruster | CrossFit | Corpo Inteiro | quadríceps, glúteos, deltóides, tríceps, core | Com a barra apoiada na frente dos ombros, faça um agachamento frontal e, ao subir, estenda os braços levando a barra acima da cabeça em um movimento contínuo. | Coordene respiração e não perca o alinhamento dos joelhos. Evite travar os cotovelos de forma agressiva.",
    "Deadlift | CrossFit | Pernas | isquiotibiais, glúteo máximo, eretores da espinha, trapézio | Pés na largura do quadril, segure a barra próxima à canela. Estenda quadris e joelhos levantando a barra até ficar ereto e retorne descendo com controle até a barra chegar próximo ao chão. | Não arredonde a coluna. Mantenha a barra próxima ao corpo e ative o core.",
    "Power Clean | CrossFit | Corpo Inteiro | quadríceps, glúteos, trapézio, deltoides, eretores da espinha | Do chão até a posição de rack frontal, puxe a barra explosivamente, estendendo quadris e joelhos, e receba-a sobre os ombros com um leve agachamento. | Comece com PVC ou barra leve. Técnica é prioridade absoluta.",
    "Power Snatch | CrossFit | Corpo Inteiro | quadríceps, glúteos, deltoides, trapézio, core | Do chão, puxe a barra em um único movimento explosivo até acima da cabeça, recebendo-a com braços estendidos. | Movimento avançado; pratique progressões, começando com a barra leve e supervisão.",
    "Kettlebell Swing | CrossFit | Posterior de Coxa | glúteo máximo, isquiotibiais, eretores da espinha, ombros | Com o kettlebell entre as pernas, realize um movimento de dobrar o quadril (hinge) e impulsionar o quadril à frente para balançar o kettlebell até a altura dos ombros ou acima da cabeça, conforme a variação. | O movimento vem do quadril, não dos braços. Mantenha a coluna neutra.",
    "Box Jump | CrossFit | Pernas | quadríceps, glúteo máximo, panturrilhas | Em frente a um caixa, agache levemente e salte sobre a caixa, aterrissando com joelhos flexionados, depois desça com cuidado. | Use altura adequada à sua capacidade. Se tiver insegurança, prefira step-ups.",
    "Burpee | CrossFit | Corpo Inteiro | peitoral, ombros, tríceps, quadríceps, core | Em pé, agache e leve as mãos ao chão, projete os pés para trás entrando em posição de prancha, faça uma flexão (opcional), retorne os pés à frente e salte com as mãos acima da cabeça. | Mantenha o ritmo constante e respeite sua condição cardiorrespiratória.",
    "Wall Ball | CrossFit | Corpo Inteiro | quadríceps, glúteos, ombros, tríceps, core | Com a bola na frente do peito, agache e, ao subir, arremesse a bola em direção ao alvo na parede, pegando-a ao retornar. | Escolha peso de bola e altura compatíveis com seu nível. Não deixe a bola bater no rosto.",

    /* =========================
       PILATES – SOLO
       ========================= */
    "The Hundred | Pilates | Core | reto abdominal, transverso do abdome, oblíquos | Deitado, pernas tabletop (90° quadris e joelhos) ou estendidas, cabeça e ombros elevados, braços estendidos ao lado do corpo bombeando para cima e para baixo enquanto respira ritmicamente. | Mantenha a lombar apoiada ou neutra. Se houver desconforto no pescoço, apoie a cabeça.",
    "Roll Up | Pilates | Core | reto abdominal, flexores de quadril, eretores da espinha | Deitado, braços estendidos atrás da cabeça, enrole a coluna vértebra por vértebra, rolando para sentar e alcançar os pés, e depois desenrole voltando. | Use amplitude progressiva. Evite puxar com impulso.",
    "Single Leg Stretch | Pilates | Core | reto abdominal, transverso, flexores de quadril | Deitado, cabeça e ombros elevados, uma perna estendida e outra flexionada em direção ao peito, alternando as pernas em ritmo controlado. | Mantenha abdômen firme e pescoço relaxado. Respire regularmente.",
    "Bridge (Ponte de Ombros) | Pilates | Glúteos | glúteo máximo, isquiotibiais, eretores da espinha | Deitado, joelhos flexionados, pés no chão, eleve o quadril até alinhar joelhos, quadris e ombros, e desça articulando a coluna. | Evite hiperextensão da lombar. Ative o abdômen e glúteos.",
    "Side Kick | Pilates | Quadril | glúteo médio, glúteo mínimo, core | Deitado de lado, perna de cima se move à frente e atrás controladamente, mantendo quadris alinhados. | Não deixe o tronco balançar; estabilize o core.",
    "Swimming | Pilates | Costas | eretores da espinha, glúteos, ombros | Deitado de barriga para baixo, eleve braços e pernas alternadamente, como se estivesse nadando. | Mantenha o olhar para o chão para não tensionar o pescoço.",

    /* =========================
       PILATES – APARELHOS (GERAL)
       ========================= */
    "Footwork no Reformer | Pilates | Pernas | quadríceps, glúteos, panturrilhas | Deitado no reformer, pés na barra de pés, flexione e estenda joelhos empurrando e retornando o carrinho. | Mantenha o alinhamento dos joelhos com os pés e controle a carga de molas.",
    "Long Stretch no Reformer | Pilates | Corpo Inteiro | core, ombros, peitoral, glúteos | Em posição de prancha sobre o reformer, empurre o carrinho para trás e para frente controlando a estabilidade. | Exige força e controle; ajuste as molas e evite colapsar a lombar.",
    "Elevação de Braços nas Alças (Reformer) | Pilates | Ombros | deltóides, trapézio inferior, core | Sentado ou ajoelhado, segure as alças e eleve/abaixe os braços em diferentes planos. | Mantenha coluna neutra e controle a respiração.",

    /* =========================
       GINÁSTICA FUNCIONAL
       ========================= */
    "Afundo (Lunge) | Ginástica Funcional | Pernas | quadríceps, glúteos, isquiotibiais, panturrilhas | Em pé, dê um passo à frente flexionando ambos joelhos até formar ângulos de aproximadamente 90°, depois retorne à posição inicial. | Mantenha o tronco ereto e joelho da frente alinhado com a ponta do pé. Evite que o joelho ultrapasse muito a ponta do pé.",
    "Afundo Reverso | Ginástica Funcional | Pernas | quadríceps, glúteos | Dê um passo para trás flexionando ambos joelhos, mantendo o peso na perna da frente, e retorne. | Geralmente mais confortável para joelhos. Mantenha o core firme.",
    "Afundo Lateral | Ginástica Funcional | Pernas | quadríceps, adutores, glúteo médio | Em pé, dê um passo lateral, flexionando o joelho da perna que pisa enquanto a outra mantém o joelho estendido. | Não deixe o joelho colapsar para dentro. Sinta o alongamento na perna estendida.",
    "Agachamento Sumô com Peso | Ginástica Funcional | Pernas | adutores, glúteos, quadríceps | Com pés mais afastados e pontas levemente para fora, segure um peso à frente (halter ou kettlebell) e agache mantendo o peito ereto. | Mantenha os joelhos seguindo a linha dos pés e não deixe cair para dentro.",
    "Step-up no Banco | Ginástica Funcional | Pernas | quadríceps, glúteos, panturrilhas | Suba em um banco ou caixa com uma perna, estendendo o quadril, e desça controlando. | Use altura compatível com sua mobilidade. Apoie todo o pé na superfície.",
    "Good Morning | Ginástica Funcional | Posterior de Coxa | isquiotibiais, glúteo máximo, eretores da espinha | Em pé, com leve flexão de joelhos, incline o tronco à frente mantendo a coluna neutra e volte à posição ereta. | Comece sem carga. É um exercício de padrão de dobrar quadril (hinge); não arredonde a lombar.",
    "Bear Crawl | Ginástica Funcional | Corpo Inteiro | ombros, core, quadríceps, glúteos | Em posição de quatro apoios com joelhos tirados levemente do chão, caminhe à frente e para trás movimentando alternadamente mãos e pés. | Mantenha quadril baixo e abdômen firme. Evite dar passos muito grandes.",
    "Mountain Climber | Ginástica Funcional | Cardio/Core | reto abdominal, ombros, quadríceps | Em posição de prancha, traga alternadamente os joelhos em direção ao peito em ritmo moderado ou rápido. | Mantenha as mãos abaixo dos ombros e a lombar estável; não deixe o quadril subir demais.",
    "Jumping Jack | Ginástica Funcional | Cardio | deltóides, quadríceps, panturrilhas | Em pé, salte abrindo pernas e braços lateralmente e retorne fechando. | Aterrisse com joelhos levemente flexionados. Se houver impacto incômodo, faça a versão sem salto.",
    "Abdominal Bicicleta | Ginástica Funcional | Core | reto abdominal, oblíquos | Deitado, alternar a aproximação do cotovelo ao joelho oposto, simulando pedalar, com tronco levemente elevado. | Controle o ritmo e mantenha a lombar próxima ao solo.",

    /* =========================
       ALONGAMENTOS – MEMBROS INFERIORES
       ========================= */
    "Alongamento de Isquiotibiais em Pé | Alongamento | Pernas | isquiotibiais, panturrilha | Em pé, apoie o calcanhar em uma superfície elevada, mantenha o joelho estendido ou levemente flexionado e incline o tronco à frente sem arredondar demais a coluna. | Mantenha o alongamento suave, sem dor aguda. Respire profundamente e não force o joelho.",
    "Alongamento de Quadríceps em Pé | Alongamento | Pernas | quadríceps | Em pé, segure o dorso do pé atrás do corpo com a mão do mesmo lado, aproximando o calcanhar do glúteo. | Mantenha os joelhos alinhados e o tronco ereto. Se necessário, segure em um apoio para equilibrar.",
    "Alongamento de Glúteo Sentado | Alongamento | Quadril | glúteo máximo, piriforme | Sentado, cruze uma perna sobre a outra e incline o tronco à frente, sentindo o alongamento no glúteo da perna cruzada. | Não force a lombar. Use a respiração para relaxar a musculatura.",
    "Alongamento de Panturrilha na Parede | Alongamento | Pernas | gastrocnêmio, sóleo | Em pé diante da parede, apoie as mãos e dê um passo à frente, mantendo a perna de trás estendida e o calcanhar no chão. Incline-se até sentir o alongamento. | Mantenha o calcanhar firme no solo. Não balance; fique 20–30 segundos em cada posição.",

    /* =========================
       ALONGAMENTOS – COLUNA E OMBROS
       ========================= */
    "Alongamento de Peitoral na Parede | Alongamento | Peito | peitoral maior, deltóide anterior | Em pé, apoie a mão e o antebraço na parede, com o cotovelo em 90°, e gire levemente o tronco para o lado oposto. | Não force além do confortável. Sinta alongar o peito sem dor articular no ombro.",
    "Alongamento de Ombro Cruzando Braço | Alongamento | Ombros | deltóide posterior, trapézio médio | Em pé ou sentado, traga um braço à frente do corpo e use o outro para aproximá-lo do peito. | Mantenha o ombro relaxado, sem elevar em direção à orelha.",
    "Alongamento Gato-Vaca | Alongamento | Coluna | eretores da espinha, paravertebrais | Em quatro apoios, alterne entre arquear a coluna para cima (gato) e descer a barriga aproximando o peito do chão (vaca). | Movimente de forma suave, acompanhando a respiração, sem forçar o pescoço.",
    "Alongamento de Coluna em Criança (Child's Pose) | Alongamento | Coluna | eretores da espinha, glúteos, dorsais | Ajoelhado, sente nos calcanhares e estenda os braços à frente, levando o tronco em direção ao chão. | Se necessário, abra os joelhos para acomodar melhor o tronco. Relaxe pescoço e ombros.",
    "Alongamento de Pescoço Lateral | Alongamento | Pescoço | esternocleidomastoideo, trapézio superior | Sentado ou em pé, incline a cabeça para um lado, aproximando a orelha do ombro, podendo usar a mão para intensificar levemente. | Não force com a mão; o alongamento deve ser suave. Evite rotações bruscas.",

    /* =========================
       ALONGAMENTOS – CORPO INTEIRO
       ========================= */
    "Alongamento em Cadeia Posterior (Flexão em Pé) | Alongamento | Corpo Inteiro | isquiotibiais, panturrilhas, eretores da espinha | Em pé, flexione o tronco à frente deixando os braços pendentes em direção ao chão, dentro do seu limite de conforto. | Mantenha leve flexão de joelhos se sentir tensão na lombar. Suba devagar desenrolando a coluna.",
    "Alongamento Lateral de Tronco | Alongamento | Tronco | oblíquos, latíssimo do dorso | Em pé, eleve um braço acima da cabeça e incline o tronco para o lado oposto. | Não gire o tronco; mantenha a lateral do corpo alongando suavemente. Respire fundo."
];

// Função auxiliar (precisa estar igual à do index)
function normalize(str) {
    return str
        .toLowerCase()
        .normalize("NFD")              // remove acentos
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, "");
}

// Objeto global usado pela IA
const bancoDeExercicios = {};

rawData.forEach(item => {
    const parts = item.split(' | ');
    if (parts.length === 6) {
        const [nome, modalidade, categoria, musculos, execucao, dica] = parts;
        const key = normalize(nome).replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        const searchTerms = [
            ...nome.split(/\s+/).map(normalize),
            ...musculos.split(/,\s*/).map(normalize).filter(t => t.length > 2),
            normalize(categoria),
            normalize(modalidade)
        ];

        bancoDeExercicios[key] = {
            nome,
            modalidade,
            categoria,
            musculos,
            execucao,
            dica,
            termos: [...new Set(searchTerms.filter(t => t))]
        };
    }
});
