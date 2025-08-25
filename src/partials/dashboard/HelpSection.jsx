import React from 'react'

const HelpSection = () => {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-md p-6">
			<h3 className="text-xl font-semibold text-gray-800 mb-4">¿Necesitas ayuda?</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="flex items-start">
					<div className="bg-blue-100 p-2 rounded-lg mr-4">
						<span className="material-icons text-blue-900">support_agent</span>
					</div>
					<div>
						<h4 className="font-medium text-gray-800">Atención al cliente</h4>
						<p className="text-gray-600 text-sm mt-1">Estamos disponibles 24/7 para resolver tus dudas.</p>
						<p className="text-blue-600 font-medium mt-2">1-800-BANCO-LATINO</p>
					</div>
				</div>
				
				<div className="flex items-start">
					<div className="bg-blue-100 p-2 rounded-lg mr-4">
						<span className="material-icons text-blue-900">chat</span>
					</div>
					<div>
						<h4 className="font-medium text-gray-800">Chat en línea</h4>
						<p className="text-gray-600 text-sm mt-1">Conversa con uno de nuestros agentes.</p>
						<button className="bg-blue-100 text-blue-700 hover:bg-blue-200 py-1 px-3 rounded-md text-sm mt-2">
							Iniciar chat
						</button>
					</div>
				</div>
			</div>
		</div>
  )
}

export default HelpSection