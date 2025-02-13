import { useState } from "react"

import styles from './Components.module.css'
import '../global.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState('?')

    const CalcularIMC = () => {
        const AlturaMetros = (altura / 100) ** 2
        const calcImc = peso / AlturaMetros

        setResultado(isNaN(calcImc) ? 0 : calcImc.toFixed(2))
    }

    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <h1 className={styles.corPrincipal}>Calcule o seu IMC</h1>

                <input className={styles.input} type='number' onChange={(e) => setPeso(e.target.value)} placeholder='Peso em kg'></input>
                <input className={styles.input} type='number' onChange={(e) => setAltura(e.target.value)} placeholder='Altura em cm'></input>
                <p className={styles.container}>
                    Seu IMC é de: <strong>{resultado}</strong>
                </p>

                <button className={styles.botao} onClick={CalcularIMC}>Calcular IMC</button>
            </div>

            <ul className={styles.lista}>
                <li className={`${styles.item} ${resultado >= 40 ? styles.itemSelecionado : ''}`} >
                    <img className={styles.imagem} src="https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png.webp" alt="Obesidade grau 3" />
                    <p>
                        Acima de 40,0
                    </p>
                    <h3 className={styles.alignText}>Obesidade grau 3</h3>
                    <p className={styles.p}>
                        Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.
                    </p>
                </li>
                <li className={`${styles.item} ${resultado >= 35 && resultado <= 39.99 ? styles.itemSelecionado : ''}`}>
                    <img className={styles.imagem} src="https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png.webp" alt="Obesidade grau 2" />
                    <p>
                        Entre 35,0 e 39,9
                    </p>
                    <h3 className={styles.alignText}>Obesidade grau 2</h3>
                    <p className={styles.p}>
                        Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.
                    </p>
                </li>
                <li className={`${styles.item} ${resultado >= 30 && resultado <= 34.99 ? styles.itemSelecionado : ''}`}>
                    <img className={styles.imagem} src="https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png.webp" alt="Obesidade grau 1" />
                    <p>
                        Entre 30,0 e 34,9
                    </p>
                    <h3 className={styles.alignText}>Obesidade grau 1</h3>
                    <p className={styles.p}>
                        Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
                    </p>
                </li>
                <li className={`${styles.item} ${resultado >= 25 && resultado <= 29.99 ? styles.itemSelecionado : ''}`}>
                    <img className={styles.imagem} src="https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png.webp" alt="Sobrepeso" />
                    <p>
                        Entre 25,0 e 29,9
                    </p>
                    <h3 className={styles.alignText}>Sobrepeso</h3>
                    <p className={styles.p}>
                        Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.
                    </p>
                </li>
                <li className={`${styles.item} ${resultado >= 18.60 && resultado <= 24.99 ? styles.itemSelecionado : ''}`}>
                    <img className={styles.imagem} src="https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png.webp" alt="Peso normal" />
                    <p>
                        Entre 18,6 e 24,9
                    </p>
                    <h3 className={styles.alignText}>Peso normal</h3>
                    <p className={styles.p}>
                        Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.
                    </p>
                </li>
                <li className={`${styles.item} ${resultado <= 18.50 ? styles.itemSelecionado : ''}`}>
                    <img className={styles.imagem} src="https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png.webp" alt="Abaixo do peso normal" />
                    <p>
                        18,5 ou menos
                    </p>
                    <h3 className={styles.alignText}>Abaixo do peso normal</h3>
                    <p className={styles.p}>
                        Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.
                    </p>
                </li>
            </ul>

            <div className={styles.OqueE}>
                <h2 className={`${styles.corPrincipal} ${styles.alignText}`}>O que é o <i>IMC</i> e sua Importância?</h2>

                <div className={styles.texto}>
                    <p >
                        O Índice de Massa Corporal (IMC) é uma medida utilizada para avaliar se uma pessoa está dentro de uma faixa de peso saudável em relação à sua altura. Ele é calculado dividindo o peso (em quilogramas) pelo quadrado da altura (em metros). O resultado fornece uma indicação geral sobre o estado nutricional de um indivíduo, ajudando a identificar se ele está abaixo do peso, com peso normal, sobrepeso ou obesidade.
                    </p>
                    <br />
                    <p >
                        O IMC é uma ferramenta simples e amplamente utilizada por profissionais de saúde para monitorar e orientar o controle de peso. Embora não leve em consideração fatores como a composição corporal (por exemplo, massa muscular), ele é um indicador útil para detectar riscos de doenças associadas ao peso, como diabetes, hipertensão e doenças cardíacas.Ao acompanhar o IMC, é possível tomar decisões informadas sobre hábitos alimentares e atividade física, promovendo um estilo de vida mais saudável e prevenindo problemas de saúde no futuro.
                    </p>
                </div>
            </div>

            <h5>
                Informações / elementos retirados do site<a href="https://abeso.org.br/obesidade-e-sindrome-metabolica/calculadora-imc/">obeso.org.br</a>
            </h5>
            <p>
                Página ficticia, apenas para fins de estudo em programação.
            </p>
        </div>
    )
}

export default Formulario