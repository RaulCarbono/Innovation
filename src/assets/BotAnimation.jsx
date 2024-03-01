
import Lottie from 'react-lottie';
import Boot from './Bot.json' // Asegúrate de importar correctamente tu animación

export default function LottieAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Boot,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} height={240} width={240} />;
}