import Layout from '../../../components/Layout'
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState()
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const closeDropdown = () => {
    setDisplayDropdown(false);
  }

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const options = [
    { value: '2022/07/29', instanceId: '12', label: '2022/07/30' },
    { value: '2022/07/30', instanceId: '13', label: '2022/07/30' },
    { value: '2022/07/31', instanceId: '14', label: '2022/07/30' },
  ];

  useEffect(() => {
    setSelectedOption(options[0])
  }, [])

  return (
    <Layout>
      <section className="w-[90%] min-h-screen m-auto py-16 mt-[60px]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 md:text-5xl">Your booked appointments for</h1>

          <div className="relative" ref={ref} onClick={() => setDisplayDropdown(!displayDropdown)}>
            <button className="flex flex-row items-center hover:scale-105 hover:text-gray-700 active:scale-105 active:text-gray-700 focus:scale-105 duration-500 focus:text-gray-700">
              <h1 className="text-3xl font-bold md:text-5xl">{selectedOption ? selectedOption.value : options[0].value}</h1>
              <ChevronDownIcon className="w-8 h-8"/>
            </button>
            <div className={`absolute overflow-hidden duration-500 ${displayDropdown ? 'max-h-48 overflow-auto' : 'max-h-0'}`}>
              {options.map((option) => (
                <h2 key={option.instanceId}
                    className={`font-bold text-xl mr-2 px-3 py-1 bg-white cursor-pointer duration-500 hover:scale-110 ${option.value === selectedOption?.value && 'text-gray-600'}`}
                    onClick={() => setSelectedOption(option)}
                    >{option.value}
                </h2>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard