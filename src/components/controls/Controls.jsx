import React, { useState, useEffect } from 'react';
import SequencerOptions from './SequencerOptions';
import './Controls.css';

class InstrumentOption extends React.Component {
    constructor(props) {
        super(props);
        this.fileRef = React.createRef();
        this.state = {
            instrument: this.props.instrumentName,
        };
    }

    handleFileUpload = () => {
        const upload = this.fileRef.current.files[0];
        if (
            upload.type === 'audio/mpeg' ||
            upload.type === 'audio/x-wav' ||
            'audio/mp3' ||
            'audio/wav' ||
            'audio/wave' ||
            'audio/vnd.wave' ||
            'audio.aac'
        ) {
            const src = URL.createObjectURL(upload);
            this.props.uploadAudioSample(src, upload.name);
        } else {
            prompt(`Sorry, this doesn't look like an audio file.`);
        }
    };

    render() {
        return (
            <>
                {this.props.instrumentName === 'upload' ? (
                    <button className="upload-input-button">
                        {this.props.instrumentName}
                        <input
                            className="upload-input"
                            ref={this.fileRef}
                            type="file"
                            onChange={() => this.handleFileUpload()}
                        />
                        <div className="hover-button"></div>
                    </button>
                ) : (
                    <button
                        className="options"
                        onClick={() =>
                            this.props.onAddInstrumentClick(
                                this.props.instrumentName
                            )
                        }
                    >
                        {this.props.instrumentName}
                    </button>
                )}
            </>
        );
    }
}
class ControlOptions extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.instrumentOptions.map((option, i) => (
                    <InstrumentOption
                        key={i}
                        instrumentName={option}
                        onAddInstrumentClick={this.props.onAddInstrumentClick}
                        uploadAudioSample={this.props.uploadAudioSample}
                    />
                ))}
            </div>
        );
    }
}

export default function Controls({
    instrumentOptions, 
    onStartLoopClick,
    onStartStopLoopClick, 
    isPlaying, 
    onRevealDataClick, 
    onStopLoopClick, 
    onAddInstrumentClick, 
    beatDivisionOptions, 
    onChangeBeatDivision, 
    onChangeTempo, 
    onChangeVolume, 
    bpm, 
    uploadAudioSample 
}) {
    const [hasClickedInstrumentOptions, setHasClickedInstrumentOptions] = useState(false)
    const [hasClickedSequencerOptions, setHasClickedSequencerOptions] = useState(false)
    const toggleInstrumentBox = () => {
        if (hasClickedSequencerOptions) {
            setHasClickedInstrumentOptions(!hasClickedInstrumentOptions)
            setHasClickedSequencerOptions(false)
            this.setState({
                hasClickedInstrumentOptions: !hasClickedInstrumentOptions,
                hasClickedSequencerOptions: false,
            })
        } else {
            setHasClickedInstrumentOptions(!hasClickedInstrumentOptions)
        }
    }
    const toggleSequencerBox = () => {
        if (hasClickedInstrumentOptions) {
            setHasClickedSequencerOptions(!hasClickedSequencerOptions)
            setHasClickedInstrumentOptions(false)
        } else {
            setHasClickedSequencerOptions(!hasClickedSequencerOptions)
        }
    }
    return (
        <div className="Controls">
            <div className="control-buttons">
                <button onClick={onStartStopLoopClick}>
                    {' '}
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="whitesmoke"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="whitesmoke"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 22v-20l18 10-18 10z" />
                        </svg>
                    )}
                </button>
                <button
                    id="optionsButton"
                    onClick={toggleInstrumentBox}
                >
                    {hasClickedInstrumentOptions ? (
                        <div>&#x2014;</div>
                    ) : (
                        <svg
                            id="svg"
                            width="24"
                            fill="whitesmoke"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                        </svg>
                    )}
                </button>
                <button onClick={toggleSequencerBox}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="whitesmoke"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 14v-4h-3.23c-.229-1.003-.624-1.94-1.156-2.785l2.286-2.286-2.83-2.829-2.286 2.286c-.845-.532-1.781-.928-2.784-1.156v-3.23h-4v3.23c-1.003.228-1.94.625-2.785 1.157l-2.286-2.286-2.829 2.828 2.287 2.287c-.533.845-.928 1.781-1.157 2.784h-3.23v4h3.23c.229 1.003.624 1.939 1.156 2.784l-2.286 2.287 2.829 2.829 2.286-2.286c.845.531 1.782.928 2.785 1.156v3.23h4v-3.23c1.003-.228 1.939-.624 2.784-1.156l2.286 2.286 2.828-2.829-2.285-2.286c.532-.845.928-1.782 1.156-2.785h3.231zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                    </svg>
                </button>
            </div>

            <ControlOptions
                hasClickedInstrumentOptions={
                    hasClickedInstrumentOptions
                }
                hasClickedSequencerOptions={
                    hasClickedSequencerOptions
                }
                onAddInstrumentClick={onAddInstrumentClick}
                instrumentOptions={instrumentOptions}
                uploadAudioSample={uploadAudioSample}
                className={
                    hasClickedInstrumentOptions
                        ? 'instrument-options-container active'
                        : 'instrument-options-container'
                }
            />
            <SequencerOptions
                onChangeBeatDivision={onChangeBeatDivision}
                beatDivisionOptions={beatDivisionOptions}
                toggleOptions={toggleSequencerBox}
                bpm={bpm}
                onChangeTempo={onChangeTempo}
                onChangeVolume={onChangeVolume}
                className={
                    hasClickedSequencerOptions
                        ? 'sequencer-options-container active'
                        : 'sequencer-options-container'
                }
            />
        </div>
    );
}
