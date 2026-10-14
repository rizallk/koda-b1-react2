import { useEffect, useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    device: [],
    message: '',
  });
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('contactMessages');
      const data = saved ? JSON.parse(saved) : [];

      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('contactMessages', JSON.stringify(messages));
  }, [messages]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setForm((prev) => {
        const currentValues = prev[name];
        if (checked) {
          return { ...prev, [name]: [...currentValues, value] };
        } else {
          return { ...prev, [name]: currentValues.filter((v) => v !== value) };
        }
      });
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      device: form.device,
      message: form.message,
    };

    setMessages((prev) => [newMessage, ...prev]);

    setForm({
      name: '',
      email: '',
      phone: '',
      gender: '',
      device: [],
      message: '',
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-fuchsia-700 mb-7">Contact</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            className="border border-fuchsia-700 rounded-md py-2 px-3"
            type="text"
            size={30}
            placeholder="Nama"
            value={form.name}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            className="border border-fuchsia-700 rounded-md py-2 px-3"
            type="email"
            size={30}
            placeholder="Email"
            value={form.email}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            onChange={handleChange}
            className="border border-fuchsia-700 rounded-md py-2 px-3"
            type="text"
            size={30}
            placeholder="Phone Number"
            value={form.phone}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-2">Gender</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                checked={form.gender === 'Male'}
                className="accent-fuchsia-700"
              />
              Male
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                checked={form.gender === 'Female'}
                className="accent-fuchsia-700"
              />
              Female
            </label>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-2">Device</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="device"
                value="Desktop"
                onChange={handleChange}
                checked={form.device.includes('Desktop')}
                className="accent-fuchsia-700"
              />
              Desktop
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="device"
                value="Mobile"
                onChange={handleChange}
                checked={form.device.includes('Mobile')}
                className="accent-fuchsia-700"
              />
              Mobile
            </label>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            className="border border-fuchsia-700 rounded-md py-2 px-3"
            rows={4}
            placeholder="Message"
            value={form.message}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-fuchsia-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-fuchsia-700 transition">
            Submit
          </button>
        </div>
      </form>

      <hr className="text-gray-400 my-5" />

      <h1 className="text-2xl font-semibold mb-4">Contact messages list</h1>

      <div className="overflow-x-auto">
        {messages.length > 0 ? (
          <table className="min-w-full border-collapse border border-fuchsia-700">
            <thead className="bg-fuchsia-100 text-fuchsia-900">
              <tr>
                <th className="border border-fuchsia-700 px-4 py-2 text-left font-medium">
                  Name
                </th>
                <th className="border border-fuchsia-700 px-4 py-2 text-left font-medium">
                  Email
                </th>
                <th className="border border-fuchsia-700 px-4 py-2 text-left font-medium">
                  Phone
                </th>
                <th className="border border-fuchsia-700 px-4 py-2 text-left font-medium">
                  Gender
                </th>
                <th className="border border-fuchsia-700 px-4 py-2 text-left font-medium">
                  Device
                </th>
                <th className="border border-fuchsia-700 px-4 py-2 text-left font-medium">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="hover:bg-fuchsia-50 transition-colors"
                >
                  <td className="border border-fuchsia-700 px-4 py-2">
                    {msg.name}
                  </td>
                  <td className="border border-fuchsia-700 px-4 py-2">
                    {msg.email}
                  </td>
                  <td className="border border-fuchsia-700 px-4 py-2">
                    {msg.phone}
                  </td>
                  <td className="border border-fuchsia-700 px-4 py-2">
                    {msg.gender}
                  </td>
                  <td className="border border-fuchsia-700 px-4 py-2">
                    {Array.isArray(msg.device)
                      ? msg.device.join(', ')
                      : msg.device}
                  </td>
                  <td className="border border-fuchsia-700 px-4 py-2">
                    {msg.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 italic">Belum ada pesan yang disubmit.</p>
        )}
      </div>
    </div>
  );
}
