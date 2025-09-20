// src/components/ToggleSwitch.jsx
function ToggleSwitch({ metalType, setMetalType }) {
  const toggleMetal = () => {
    setMetalType(metalType === 'gold' ? 'silver' : 'gold');
  };

  return (
    <div
      className={`w-20 h-10 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ${
        metalType === 'gold' ? 'bg-yellow-500' : 'bg-gray-400'
      }`}
      onClick={toggleMetal}
    >
      <div
        className={`w-8 h-8 bg-white rounded-full shadow-md transform duration-300 ${
          metalType === 'gold' ? 'translate-x-10' : 'translate-x-0'
        }`}
      />
    </div>
  );
}

export default ToggleSwitch;
