"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Slider } from "../components/ui/slider"
import { Card } from "../components/ui/card"

interface ServerConfig {
    os: "linux" | "windows"
    osVersion: string
    cpuCores: number
    ram: number
    storage: number
    ipAddresses: number
    duration: number
    pricePerCore: number
    pricePerGbRam: number
    pricePerGbStorage: number
    pricePerIp: number
}

const RootServerConfig = () => {
    const [config, setConfig] = useState<ServerConfig>({
        os: "linux",
        osVersion: "debian11",
        cpuCores: 1,
        ram: 4,
        storage: 60,
        ipAddresses: 1,
        duration: 1,
        pricePerCore: 5, // €5 per core
        pricePerGbRam: 2, // €2 per GB RAM
        pricePerGbStorage: 0.5, // €0.50 per GB storage
        pricePerIp: 3, // €3 per IP
    })

    const osVersions = {
        linux: [
            { value: "debian11", label: "Debian 11" },
            { value: "debian12", label: "Debian 12" },
            { value: "ubuntu", label: "Ubuntu Server" },
        ],
        windows: [
            { value: "win2022", label: "Windows Server Datacenter 2022" },
            { value: "win2025", label: "Windows Server Datacenter 2025" },
        ],
    }

    const calculateTotal = () => {
        const cpuCost = config.cpuCores * config.pricePerCore
        const ramCost = config.ram * config.pricePerGbRam
        const storageCost = config.storage * config.pricePerGbStorage
        const ipCost = config.ipAddresses * config.pricePerIp
        return (cpuCost + ramCost + storageCost + ipCost) * config.duration
    }

    return (
        <>
            <div className="min-h-screen bg-[#f5f5f5] py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mb-8">Root Server Konfiguration</h1>

                    {/* OS Selection */}
                    <Card className="p-6 mb-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Betriebssystem</h2>
                        <RadioGroup
                            value={config.os}
                            onValueChange={(value) => setConfig({ ...config, os: value as "linux" | "windows" })}
                            className="flex space-x-4 mb-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="linux" id="linux" />
                                <label htmlFor="linux">Linux</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="windows" id="windows" />
                                <label htmlFor="windows">Windows</label>
                            </div>
                        </RadioGroup>

                        <Select value={config.osVersion} onValueChange={(value) => setConfig({ ...config, osVersion: value })}>
                            <SelectTrigger className="bg-white border border-gray-300 rounded-md">
                                <SelectValue placeholder="Wähle eine Version" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-300">
                                {osVersions[config.os].map((version) => (
                                    <SelectItem key={version.value} value={version.value}>
                                        {version.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Card>

                    {/* CPU Configuration */}
                    <Card className="p-6 mb-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">CPU Kerne</h2>
                        <div className="mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">Anzahl Kerne: {config.cpuCores}</span>
                                <span className="text-sm font-medium text-green-600">
                  €{(config.cpuCores * config.pricePerCore).toFixed(2)}
                </span>
                            </div>
                            <Slider
                                value={[config.cpuCores]}
                                onValueChange={(value) => setConfig({ ...config, cpuCores: value[0] })}
                                min={1}
                                max={20}
                                step={1}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs mt-1">
                                <span>1 Kern</span>
                                <span>20 Kerne</span>
                            </div>
                        </div>
                    </Card>

                    {/* RAM Configuration */}
                    <Card className="p-6 mb-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Arbeitsspeicher (RAM)</h2>
                        <div className="mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">RAM: {config.ram} GB</span>
                                <span className="text-sm font-medium text-green-600">
                  €{(config.ram * config.pricePerGbRam).toFixed(2)}
                </span>
                            </div>
                            <Slider
                                value={[config.ram]}
                                onValueChange={(value) => setConfig({ ...config, ram: value[0] })}
                                min={4}
                                max={64}
                                step={2}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs mt-1">
                                <span>4 GB</span>
                                <span>64 GB</span>
                            </div>
                        </div>
                    </Card>

                    {/* Storage Configuration */}
                    <Card className="p-6 mb-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Festplattenspeicher</h2>
                        <div className="mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">Speicher: {config.storage} GB SSD</span>
                                <span className="text-sm font-medium text-green-600">
                  €{(config.storage * config.pricePerGbStorage).toFixed(2)}
                </span>
                            </div>
                            <Slider
                                value={[config.storage]}
                                onValueChange={(value) => setConfig({ ...config, storage: value[0] })}
                                min={60}
                                max={500}
                                step={20}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs mt-1">
                                <span>60 GB SSD</span>
                                <span>500 GB SSD</span>
                            </div>
                        </div>
                    </Card>

                    {/* IP Addresses Configuration */}
                    <Card className="p-6 mb-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">IP Adressen</h2>
                        <div className="mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">Anzahl IP Adressen: {config.ipAddresses}</span>
                                <span className="text-sm font-medium text-green-600">
                  €{(config.ipAddresses * config.pricePerIp).toFixed(2)}
                </span>
                            </div>
                            <Slider
                                value={[config.ipAddresses]}
                                onValueChange={(value) => setConfig({ ...config, ipAddresses: value[0] })}
                                min={1}
                                max={5}
                                step={1}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs mt-1">
                                <span>1 IP</span>
                                <span>5 IPs</span>
                            </div>
                        </div>
                    </Card>

                    {/* Duration Selection */}
                    <Card className="p-6 mb-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Laufzeit</h2>
                        <Select
                            value={config.duration.toString()}
                            onValueChange={(value) => setConfig({ ...config, duration: Number.parseInt(value) })}
                        >
                            <SelectTrigger className="bg-white border border-gray-300 rounded-md">
                                <SelectValue placeholder="Wähle eine Laufzeit" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-300">
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((months) => (
                                    <SelectItem key={months} value={months.toString()}>
                                        {months} {months === 1 ? "Monat" : "Monate"}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Card>

                    {/* Price Overview */}
                    <Card className="p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Zahlungsübersicht</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                                <span>Gesamtpreis (monatlich)</span>
                                <span className="font-bold text-xl text-green-600">€{calculateTotal().toFixed(2)}</span>
                            </div>

                            {/* Payment Methods */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <h3 className="text-lg font-medium col-span-full mb-2">Zahlungsmethoden</h3>
                                <button className="flex items-center justify-between p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <span className="flex items-center">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsIhLMXdLZoVFeAPdNM1MbxtaqEu7F.png"
                        alt="PayPal"
                        className="h-6 w-auto mr-2"
                    />
                    Bezahlen mit PayPal
                  </span>
                                </button>
                                <button className="flex items-center justify-between p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <span className="flex items-center">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsIhLMXdLZoVFeAPdNM1MbxtaqEu7F.png"
                        alt="Kreditkarte"
                        className="h-6 w-auto mr-2"
                    />
                    Bezahlen mit Kreditkarte
                  </span>
                                </button>
                                <button className="flex items-center justify-between p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <span className="flex items-center">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsIhLMXdLZoVFeAPdNM1MbxtaqEu7F.png"
                        alt="paysafecard"
                        className="h-6 w-auto mr-2"
                    />
                    Bezahlen mit paysafecard
                  </span>
                                </button>
                                <button className="flex items-center justify-between p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <span className="flex items-center">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsIhLMXdLZoVFeAPdNM1MbxtaqEu7F.png"
                        alt="ZAP Coins"
                        className="h-6 w-auto mr-2"
                    />
                    Bezahlen mit ZAP Coins
                  </span>
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default RootServerConfig

