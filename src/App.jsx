import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    especialidade: '',
    faturamento: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      const response = await fetch('http://127.0.0.1:5000/novo-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Dados enviados com sucesso!' });
      } else {
        setStatus({ type: 'error', message: 'Erro ao enviar dados. Tente novamente.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Erro de conexão. O servidor local está rodando?' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-navy py-6 px-8 md:px-16 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="text-gold font-serif text-2xl tracking-wider font-bold">
          ELEVATE<span className="text-white font-light"> MED</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white text-sm tracking-wide">
          <a href="#ecosistema" className="hover:text-gold transition duration-300">ECOSSISTEMA</a>
          <a href="#diferencial" className="hover:text-gold transition duration-300">DIFERENCIAL</a>
        </div>
        <a href="#aplicar" className="border border-gold text-gold px-5 py-2 rounded text-sm hover:bg-gold hover:text-navy transition duration-300">
          APLICAR AGORA
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-navy text-white overflow-hidden py-32 px-8 md:px-16 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-[#03061f] z-0"></div>
        {/* Abstract Background Element */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            A Engenharia de Escala para <span className="text-gold italic">Clínicas Exclusivas.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unimos Tráfego de Alta Performance (Google/Meta) com Automação de IA para converter leads em agendamentos reais 24/7.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#aplicar" className="btn-primary w-full md:w-auto text-center text-lg">
              Solicitar Avaliação de Escala
            </a>
            <div className="text-sm font-light text-gray-400 border border-gray-700 px-6 py-3 rounded-md">
              Investimento: R$ 5.000,00/mês
              <br/><span className="text-xs">(Ad spend pago direto às plataformas)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Ecossistema Section */}
      <section id="ecosistema" className="py-24 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-gold font-bold tracking-widest uppercase mb-3">Nossa Metodologia</h2>
            <h3 className="text-4xl font-serif text-navy">O Ecossistema de Conversão</h3>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center text-gold text-2xl mb-6">
                1
              </div>
              <h4 className="text-xl font-serif font-bold text-navy mb-4">Captura de Precisão</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Campanhas cirúrgicas no Google e Meta Ads direcionadas apenas para o público de alto poder aquisitivo da sua região.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center text-gold text-2xl mb-6">
                2
              </div>
              <h4 className="text-xl font-serif font-bold text-navy mb-4">Posicionamento Premium</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Landing pages focadas em conversão que transmitem autoridade, exclusividade e confiança ao paciente.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center text-gold text-2xl mb-6">
                3
              </div>
              <h4 className="text-xl font-serif font-bold text-navy mb-4">Atendimento de IA 24/7</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Qualificação instantânea e agendamento via WhatsApp através de Inteligência Artificial. Zero leads perdidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section id="diferencial" className="py-24 px-8 md:px-16 bg-navy text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-8">O Diferencial: Leads Qualificados no WhatsApp</h2>
          <p className="text-xl font-light text-gray-300 mb-10 leading-relaxed">
            Nós não vendemos "cliques" ou "impressões". Nós entregamos pacientes de alto valor prontos para agendar na palma da mão da sua secretária, já qualificados pelo nosso sistema de IA.
          </p>
          <div className="inline-block border border-gold/30 bg-gold/10 px-8 py-6 rounded-lg">
            <p className="text-gold text-lg font-serif italic">
              "Transparência total. A Business Manager é sua. Você é dono dos dados."
            </p>
          </div>
        </div>
      </section>

      {/* Formulário Section */}
      <section id="aplicar" className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif text-navy font-bold mb-6">Pronto para dominar sua região?</h2>
            <p className="text-gray-600 font-light text-lg mb-8">
              Trabalhamos com um número limitado de clínicas por região para garantir exclusividade nos resultados. Preencha o formulário para verificarmos a disponibilidade.
            </p>
            <ul className="space-y-4 text-navy">
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex justify-center items-center mr-4 text-sm font-bold">✓</span>
                Auditoria de tráfego gratuita
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex justify-center items-center mr-4 text-sm font-bold">✓</span>
                Plano de ação personalizado
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex justify-center items-center mr-4 text-sm font-bold">✓</span>
                Demonstração da IA de atendimento
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 bg-gray-50 p-10 rounded-2xl shadow-[0_20px_50px_-20px_rgba(5,10,48,0.15)] border border-gray-100">
            <h3 className="text-2xl font-serif text-navy font-bold mb-8 text-center">Aplicação para Parceria</h3>
            
            {status.type === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h4 className="text-2xl font-serif text-navy mb-4">Aplicação Recebida!</h4>
                <p className="text-gray-600 mb-8">Nossa equipe analisará seus dados e entrará em contato em breve.</p>
                <a href={`https://wa.me/5511999999999?text=Olá, acabei de preencher a aplicação para parceria.`} target="_blank" rel="noreferrer" className="btn-primary inline-block w-full">
                  Falar com Especialista no WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition bg-white"
                    placeholder="Dr. João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition bg-white"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Especialidade da Clínica</label>
                  <input 
                    type="text" 
                    name="especialidade"
                    required
                    value={formData.especialidade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition bg-white"
                    placeholder="Ex: Dermatologia, Odontologia..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Faturamento Mensal</label>
                  <select 
                    name="faturamento"
                    required
                    value={formData.faturamento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition bg-white"
                  >
                    <option value="" disabled>Selecione uma faixa...</option>
                    <option value="Abaixo de R$ 50k">Abaixo de R$ 50k</option>
                    <option value="R$ 50k - R$ 100k">R$ 50k - R$ 100k</option>
                    <option value="R$ 100k - R$ 300k">R$ 100k - R$ 300k</option>
                    <option value="Acima de R$ 300k">Acima de R$ 300k</option>
                  </select>
                </div>
                
                {status.type === 'error' && (
                  <div className="bg-red-50 text-red-600 p-3 rounded text-sm text-center">
                    {status.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'}`}
                >
                  {loading ? 'Enviando...' : 'Enviar Aplicação'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/10 py-12 px-8 text-center text-gray-400 font-light text-sm">
        <p>© {new Date().getFullYear()} ELEVATE MED. Todos os direitos reservados.</p>
        <p className="mt-2">Especialistas em Escala para Clínicas Premium.</p>
      </footer>
    </div>
  );
}

export default App;
