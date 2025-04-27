/*
  |-----------------------------------------
  | Optimized CountDown for the App
  | @author: Toufiquer Rahman<toufiquer.0@gmail.com>
  | @copyright: newinatall, April, 2025
  |-----------------------------------------
*/
import React, { useState, useEffect, useCallback, useMemo } from 'react'

interface CountdownProps {
  targetDate?: Date
  textColor?: string
  backgroundColor?: string
  onComplete?: () => void
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate: propTargetDate,
  textColor = 'yellow',
  backgroundColor = '#4f6dff',
  onComplete = () => {},
}) => {
  // Use memo to create the target date only once
  const targetDate = useMemo(() => {
    if (propTargetDate) return propTargetDate
    const date = new Date()
    date.setHours(date.getHours() + 24)
    return date
  }, [propTargetDate])

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isComplete, setIsComplete] = useState(false)

  // Calculate time left without recreating function on each render
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate.getTime() - new Date().getTime()

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }, [targetDate])

  // Handle completion in a separate useEffect to avoid the loop
  useEffect(() => {
    if (
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 &&
      !isComplete
    ) {
      setIsComplete(true)
      onComplete()
    }
  }, [timeLeft, isComplete, onComplete])

  // Set up the timer interval
  useEffect(() => {
    // Set initial time left
    setTimeLeft(calculateTimeLeft())

    // Set up the interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  // Memoize this function to prevent recreating it on each render
  const padWithZero = useCallback((num: number): string => {
    return num.toString().padStart(2, '0')
  }, [])

  // Memoize the style objects to prevent recreating them on each render
  const boxStyle = useMemo(
    () => ({
      backgroundColor,
    }),
    [backgroundColor]
  )

  const textStyle = useMemo(
    () => ({
      color: textColor,
    }),
    [textColor]
  )

  // Create a reusable time box component to reduce duplicated JSX
  const TimeBox = ({ value }: { value: number }) => (
    <div
      className="flex justify-center items-center rounded-lg p-4 w-24 h-20"
      style={boxStyle}
    >
      <span className="text-5xl font-bold" style={textStyle}>
        {padWithZero(value)}
      </span>
    </div>
  )

  return (
    <div className="flex justify-center items-center gap-4">
      <TimeBox value={timeLeft.hours} />
      <TimeBox value={timeLeft.minutes} />
      <TimeBox value={timeLeft.seconds} />
    </div>
  )
}

export default React.memo(Countdown)
