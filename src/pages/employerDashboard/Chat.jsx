import React, { useState } from 'react'
import NewsFeedHeader from '../../components/NewsFeedHeader'
import { FaSearch, FaPhone, FaVideo, FaSmile, FaPlus, FaCheck } from 'react-icons/fa'

const Chat = () => {
	const [selected, setSelected] = useState(null)
	const conversations = [
		{ id: 1, name: 'Osakwe Prisca', status: 'typing', time: '', img: 'prisca.jpg' },
		{ id: 2, name: 'Efe Elisha', status: 'typing', time: '15s', img: 'eli.jpg' },
		{ id: 3, name: 'Salik Raymond', status: 'You: Send your cv', time: 'Sat', img: 'ogb.jpg' },
		{ id: 4, name: 'Jaden ellen', status: 'typing', time: '', img: 'law.jpg' },
	]

	const sampleMessages = {
		1: [
			{ id: 'm1', from: 'them', text: 'Hi, thanks for reaching out!' },
			{ id: 'm2', from: 'me', text: 'Hello Prisca, can we schedule a quick chat?' },
		],
		2: [
			{ id: 'm1', from: 'them', text: 'Typing…' },
		],
		3: [
			{ id: 'm1', from: 'me', text: 'Please send your CV.' },
			{ id: 'm2', from: 'them', text: 'Will do, thanks!' },
		],
		4: [
			{ id: 'm1', from: 'them', text: 'Hi!' },
		],
	}

	return (
		<div className={`h-screen flex flex-col ${selected ? 'bg-[#F5F5F5]' : 'bg-[#1A3E32] lg:bg-transparent'}`}>
			<div className="hidden lg:block"><NewsFeedHeader/></div>

			<div className={`w-full lg:max-w-[1440px] mx-auto flex-1 overflow-hidden ${selected ? '' : 'bg-[#1A3E32] lg:bg-transparent'}` }>
				<div className="grid grid-cols-1 lg:grid-cols-[296px_1fr_296px] h-full gap-4 p-4">
					{/* Left: Conversations list (dark green) */}
					<div className={`${selected ? 'hidden' : 'block'} lg:block bg-[#1A3E32] text-white h-full overflow-y-auto p-4`}>
						<div className="max-w-sm mx-auto">
							<div className="flex items-center gap-2 mb-4">
								<button className="text-[#6B8E23] text-xl">‹</button>
								<h2 className="text-[#6B8E23] text-lg font-semibold">Chat</h2>
							</div>

							<div className="relative mb-5">
								<input
									type="text"
									placeholder="Search"
									className="w-full bg-white/10 placeholder-white/70 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none border border-white/20"
								/>
								<FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80" />
							</div>

							<div className="mb-4">
								<div className="flex items-center gap-4">
									{[
										{ img: 'eli.jpg', name: 'Ellen' },
										{ img: 'prisca.jpg', name: 'Steve' },
										{ img: 'law.jpg', name: 'Micheal' },
										{ img: 'ogb.jpg', name: 'Favour' },
									].map((u, i) => (
										<div key={i} className="flex flex-col items-center">
											<img src={`assets/images/${u.img}`} alt={u.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/30" />
											<span className="mt-1 text-[10px] text-white/80">{u.name}</span>
										</div>
									))}
								</div>
								<div className="h-[2px] bg-[#6B8E23] rounded-full mt-4" />
							</div>

							<ul className="space-y-4">
								{conversations.map((c) => (
									<li key={c.id} className={`flex items-start justify-between cursor-pointer rounded-lg px-2 py-2 transition-colors ${selected?.id === c.id ? 'bg-white/10' : 'hover:bg-white/5'}`} onClick={() => setSelected(c)}>
										<div className="flex items-start gap-3">
											<img src={`assets/images/${c.img}`} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
											<div>
												<p className="text-sm font-semibold text-white">{c.name}</p>
												<p className={`text-xs ${c.status.toLowerCase().includes('typing') ? 'text-[#6B8E23]' : 'text-[#B7D4C7]'}`}>{c.status}</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											{c.time && <span className="text-xs text-[#B7D4C7] whitespace-nowrap">{c.time}</span>}
											<span className="w-2 h-2 rounded-full border border-white/40 inline-block" />
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Middle: Chat view or empty state */}
					<div className={`${selected ? 'flex' : 'hidden'} lg:flex bg-[#F5F5F5] h-full overflow-hidden flex-col`}>
						{selected && (
							<div className="flex items-center justify-between p-4 bg-[#E6EDDF] sticky top-0 z-10">
								<div className="flex items-start gap-3">
									<button onClick={() => setSelected(null)} className="lg:hidden mr-1 text-[#1A3E32]" aria-label="Back">‹</button>
									<div>
										<div className="flex items-center gap-2">
											<p className="text-[#1A3E32] font-semibold">{selected.name}</p>
											<span className="w-2.5 h-2.5 bg-[#6B8E23] rounded-full inline-block" />
										</div>
										<p className="text-xs text-[#6B8E23] mt-0.5">online</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<button className="w-8 h-8 rounded-full border border-[#6B8E23] text-[#1A3E32] flex items-center justify-center bg-transparent"><FaPhone /></button>
									<button className="w-8 h-8 rounded-full border border-[#6B8E23] text-[#1A3E32] flex items-center justify-center bg-transparent"><FaVideo /></button>
								</div>
							</div>
						)}

						{selected && (sampleMessages[selected.id] || []).length > 0 ? (
							<div className="flex-1 overflow-y-auto p-6 space-y-6">
								{(sampleMessages[selected.id] || []).map((m) => (
									<div key={m.id} className={`${m.from === 'me' ? 'flex justify-end' : 'flex justify-start'}`}>
										<div className={`${m.from === 'me' ? 'items-end' : 'items-start'} flex flex-col max-w-[80%]`}>
											{m.from !== 'me' && selected && (
												<div className="flex items-center gap-2 mb-2">
													<img src={`assets/images/${selected.img}`} alt={selected.name} className="w-8 h-8 rounded-full object-cover" />
													<span className="text-xs text-[#1A3E32] opacity-80">{selected.name}</span>
												</div>
											)}
											<div className={`${m.from === 'me' 
												? 'bg-[#16730F] text-white rounded-[18px] rounded-tr-[10px] rounded-tl-[22px] rounded-br-[10px]'
												: 'bg-[#E9ECE9] text-[#1A3E32] rounded-[18px] rounded-bl-[10px] rounded-tr-[22px] rounded-br-[22px]'} px-4 py-3 shadow-sm`}>
												<p className="text-sm leading-relaxed">{m.text}</p>
											</div>
											<div className="flex items-center gap-2 mt-1 text-[10px] opacity-70 text-[#1A3E32]">
												<span>{m.time || 'SUN AT 6:05 AM'}</span>
												{m.from === 'me' && <FaCheck className="text-[#16730F]" />}
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="flex-1 overflow-y-auto flex items-center justify-center p-4">
								{!selected ? (
									<div className="text-center px-4">
										<img src="assets/images/message.png" alt="Chat" className="w-50 h-30 mx-auto mb-4 opacity-90" />
										<h3 className="text-[#16730F] font-semibold text-lg mb-2">No Conversation Selected</h3>
										<p className="text-[#1A3E32] text-sm opacity-80">Choose a conversation on the left to view or respond to messages.</p>
									</div>
								) : (
									<div className="text-center px-4">
										<img src="assets/images/message.png" alt="Chat" className="w-50 h-30 mx-auto mb-4 opacity-90" />
										<h3 className="text-[#16730F] font-semibold text-lg">Start a Conversation</h3>
									</div>
								)}
							</div>
						)}

						<div className="p-4 sticky bottom-0 bg-[#F5F5F5]">
							<div className="w-full rounded-2xl border border-[#16730F] bg-white/80 px-4 py-3 flex items-center gap-3">
								<FaSmile className="text-[#1A3E32]" />
								<FaPlus className="text-[#1A3E32]" />
								<input type="text" placeholder="Type a message" className="flex-1 bg-transparent focus:outline-none text-[#1A3E32]" />
								<button className="bg-[#0E2A23] text-white rounded-full w-9 h-9 flex items-center justify-center">
									<img src="assets/images/Send_Submit.svg" alt="send" className="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>

					{/* Right: Details/Context panel as fixed 296px green column */}
					<div className="hidden lg:block bg-[#16730F] h-full overflow-y-auto p-6 rounded-2xl">
						{selected && (
							<div className="text-center text-white max-w-sm mx-auto">
								<div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-4 border-white/20">
									<img src={`assets/images/${selected.img}`} alt={selected.name} className="w-full h-full object-cover" />
								</div>
								<p className="font-semibold">{selected.name}</p>
								<p className="text-xs text-white/80">Jobseeker</p>
								<button className="mt-3 inline-block px-5 py-2 rounded-full text-sm text-white shadow-sm" style={{ background: 'linear-gradient(180deg, #C9C284 0%, #8D843E 100%)' }}>View Profile</button>
								<div className="mt-6 space-y-6 text-left text-white/90">
									<div>
										<div className="h-[2px] bg-white/30 mb-2" />
										<p className="text-xs break-all">osakweprsca@gmail.com</p>
									</div>
									<div>
										<div className="h-[2px] bg-white/30 mb-2" />
										<p className="text-xs">+234 7061410614</p>
									</div>
									<div>
										<div className="h-[2px] bg-white/30 mb-2" />
										<p className="text-xs break-all">https://linktree.com</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat
