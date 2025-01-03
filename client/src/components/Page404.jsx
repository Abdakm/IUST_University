import { logo } from '../assets/index.js';

export default function Page404() {
    return (
        <section className="bg-primary h-full w-full fixed top-0 left-0">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl flex items-center justify-center h-full w-full">
                <div
                    className="mx-auto max-w-screen-2xl text-center text-white p-[100px] border rounded-xl"
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: '10%',
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"> 404 </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl dark:text-white"> Something's missing. </p>
                    <p className="mb-4 text-lg font-light text-white"> Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <a href="/" className="inline-flex bg-secondary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4" > Back to Homepage </a>
                </div>
            </div>
        </section>
    );
}
