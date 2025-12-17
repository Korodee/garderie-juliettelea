export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-pink-50 text-slate-800 px-6 text-center">
      <div className="text-5xl font-extrabold mb-3">404</div>
      <p className="text-lg mb-6">
        Oups! La page que vous cherchez n&apos;existe pas.
      </p>
      <a
        href="/"
        className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
      >
        Retour à l&apos;accueil
      </a>
    </div>
  );
}

