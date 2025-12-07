import Header from "./header";
import Mainimagesection from "./mainImageSection";
import Footer from "./footer";

function Home() {
    return (
        <>
            <Header />
            <Mainimagesection />
            <main className="p-8">
                <p className="mx-auto text-center max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta ipsum at dui euismod suscipit. Phasellus tincidunt libero felis, a feugiat ipsum pulvinar non. Nam venenatis pulvinar ipsum vel tempus. Suspendisse et sollicitudin felis, id hendrerit magna. Proin sit amet eros ac lectus porttitor auctor. Ut eu justo at augue lobortis tristique. Nullam vitae bibendum leo, sit amet pulvinar tortor. In a augue auctor, faucibus odio id, finibus nunc.</p>
            </main>

            <Footer />
        </>
    );
}
export default Home;